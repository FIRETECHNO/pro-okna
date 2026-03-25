<script setup lang="ts">
import MyAccentButton from './MyAccentButton.vue'
import { useForm, useField } from 'vee-validate'
import { ref, watch, nextTick } from 'vue'
import * as yup from 'yup'

const request = ref({
  login: '',
  phone: '',
  consent: false,
})

const result = ref('')
const showCaptchaDialog = ref(false)
const pendingFormValues = ref<any>(null)

const schemaOfRequest = yup.object({
  login: yup.string().required('Укажите ФИО'),
  phone: yup
    .string()
    .required('Укажите телефон')
    .matches(/^\+?[\d\s\(\)\-]{10,15}$/, 'Неверный формат телефона'),
  consent: yup.boolean().oneOf([true], 'Необходимо дать согласие на обработку персональных данных'),
})

const formRequest = useForm({
  validationSchema: schemaOfRequest,
  validateOnMount: false,
})

let { handleSubmit, meta } = formRequest

const login = useField('login')
const phone = useField('phone')
const consent = useField('consent')

async function checkToken(token: string): Promise<boolean> {
  try {
    let res = await fetch('https://functions.yandexcloud.net/d4e1o2dt1n15ah338ais', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })
    if (res.status == 200) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

async function submitForm(values: any) {
  try {
    let response = await fetch('https://api.formtomail.ru/send', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Новая заявка Стеклосервис',
        body: {
          Имя: values.login,
          Телефон: values.phone,
        },
        apiKey: import.meta.env.VITE_EMAIL_API_TOKEN,
      }),
    })

    if (response.status == 200) result.value = 'Ваша заявка отправлена'
  } catch (error) {
    console.log(error)
  }
}

function onInvalid() {
  result.value = 'Проверьте правильность заполнения формы'
}

function onSuccess(values: any) {
  pendingFormValues.value = values
  showCaptchaDialog.value = true
}

const onSubmitRequest = handleSubmit(onSuccess, onInvalid)

function onCaptchaSuccess(token: string) {
  checkToken(token).then((isValid) => {
    if (isValid) {
      showCaptchaDialog.value = false
      if (pendingFormValues.value) {
        submitForm(pendingFormValues.value)
      }
    }
  })
}

function onCaptchaClose() {
  showCaptchaDialog.value = false
}

declare global {
  interface Window {
    smartCaptcha: any
    loadCaptchaScript: boolean
  }
}

function loadCaptchaScript(): Promise<void> {
  return new Promise((resolve) => {
    if (window.loadCaptchaScript) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = 'https://smartcaptcha.yandexcloud.net/captcha.js'
    script.defer = true
    script.onload = () => {
      window.loadCaptchaScript = true
      resolve()
    }
    document.head.appendChild(script)
  })
}

function renderCaptcha() {
  nextTick(() => {
    if (window.smartCaptcha) {
      window.smartCaptcha.render('captcha-dialog-container-consult', {
        sitekey: import.meta.env.VITE_SC_TOKEN,
        callback: onCaptchaSuccess,
      })
    }
  })
}

watch(showCaptchaDialog, async (newVal) => {
  if (newVal) {
    await loadCaptchaScript()
    renderCaptcha()
  }
})
</script>
<template>
  <v-container class="consultation-container">
    <v-row style="margin: 0">
      <v-col cols="12" class="consultation-text-form-container">
        <slot>Записаться на консультацию</slot>
      </v-col>

      <v-col cols="12" class="consultation-form-container">
        <v-form @submit.prevent="onSubmitRequest">
          <v-row class="flex justify-center">
            <v-col cols="12" md="6">
              <input
                type="text"
                name="login"
                v-model="login.value.value"
                placeholder="ФИО"
                class="input-consultation-container"
              />
              <Transition>
                <div v-if="login.errors.value.length > 0" class="errors-container">
                  {{ login.errors.value[0] }}
                </div>
              </Transition>
            </v-col>
            <v-col cols="12" md="6">
              <div class="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  v-model="phone.value.value"
                  placeholder="Номер телефона"
                  class="input-consultation-container"
                />
                <Transition name="fade">
                  <div v-if="phone.errors.value.length > 0" class="errors-container">
                    {{ phone.errors.value[0] }}
                  </div>
                </Transition>
              </div>
            </v-col>

            <v-col cols="12" class="flex justify-center">
              <v-checkbox
                v-model="consent.value.value"
                :error-messages="consent.errorMessage.value"
                hide-details="auto"
                required
              >
                <template #label>
                  <span>
                    Даю согласие на&nbsp;
                    <a
                      class="agreement-highlight"
                      href="/personal-data-agreement.pdf"
                      target="_blank"
                    >
                      обработку персональных данных
                    </a>
                  </span>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>

          <div class="div-button-consultation-container" style="justify-content: center">
            <MyAccentButton
              class="button-consultation-container"
              :disabled="!meta.valid"
              type="submit"
            >
              Отправить заявку
            </MyAccentButton>
          </div>

          <div v-if="result" class="result-message mt-4 text-center">
            {{ result }}
          </div>
        </v-form>
      </v-col>
    </v-row>

    <v-dialog v-model="showCaptchaDialog" max-width="400" persistent>
      <v-card class="captcha-dialog-card">
        <v-card-title class="captcha-dialog-title">Подтвердите, что вы не робот</v-card-title>
        <v-card-text>
          <div id="captcha-dialog-container-consult" class="smart-captcha"></div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="grey" variant="text" @click="onCaptchaClose">Отмена</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.result-message {
  font-size: 1.1rem;
  color: #2e7d32;
  /* зелёный для успеха */
}

.personal-agreement-container {
  display: flex;
  justify-content: center;
}

.agreement-highlight {
  color: #e52e2a;
  font-weight: 600;
  text-decoration: underline;
}

.consultation-container {
  margin: 50px 0 50px 0;
  border-radius: 16px;
  background-color: rgba(217, 217, 217, 1);
  padding: 0px;
}

.consultation-text-form-container {
  background-color: rgba(55, 55, 55, 1);
  color: white;
  font-size: 27px;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  padding-left: 30px;
  padding: 20px;
}

.input-consultation-container {
  width: 100%;
  height: 5vh;
  min-height: 50px;
  border-radius: 16px;
  background-color: white;
  color: rgba(0, 0, 0, 0.61);
  font-family: 'Montserrat Variable';
  font-weight: 400;
  font-size: 20px;
  padding-left: 30px;
  margin-bottom: 5px;
}

.errors-container {
  color: red;
}

.div-button-consultation-container {
  display: flex;
  justify-content: center;
}

.button-consultation-container {
  width: 50%;
  border-radius: 15px;
}

.input-consultation-container:focus {
  outline: none;
}

@media (max-width: 768px) {
  .consultation-container {
    width: 100% !important;
    border-radius: 0px;
  }

  .consultation-text-form-container {
    border-radius: 0px;
    font-weight: 400;
    font-size: 20px;
    background-color: rgba(33, 33, 33, 1);
  }

  .inputes-consultation-container {
    flex-direction: column;
  }

  .input-consultation-container {
    width: 90%;
    height: 3vh;
    font-size: 16px;
    margin-left: 25px;
  }

  .div-button-consultation-container {
    display: block;
  }

  .button-consultation-container {
    width: 90%;
    margin-left: 25px;
  }
}

.captcha-dialog-card {
  background-color: white !important;
  border-radius: 16px !important;
}

.captcha-dialog-title {
  color: rgba(55, 55, 55, 1) !important;
  font-family: 'Montserrat Variable';
  text-align: center;
}

#captcha-dialog-container-consult {
  display: flex;
  justify-content: center;
}
</style>
