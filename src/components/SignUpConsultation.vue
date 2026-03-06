<script setup lang="ts">
import MyAccentButton from './MyAccentButton.vue'
import { useForm, useField } from 'vee-validate'
import { ref, computed } from 'vue'
import * as yup from 'yup'

const request = ref({
  login: '',
  phone: '',
  consent: false,
})

const result = ref('')

const schemaOfRequest = yup.object({
  login: yup.string().required('Укажите ФИО'),
  phone: yup
    .string()
    .required('Укажите телефон')
    .matches(/^\+?\d{10,12}$/, 'Неверный формат телефона'),
  consent: yup
    .boolean()
    .oneOf([true], 'Необходимо дать согласие на обработку персональных данных'),
})

const formRequest = useForm({
  validationSchema: schemaOfRequest,
  validateOnMount: false,
})

let { handleSubmit, meta } = formRequest

const login = useField('login')
const phone = useField('phone')
const consent = useField('consent')

async function onSuccess(values: any) {
  try {
    let response = await fetch("https://api.formtomail.ru/send", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // to: "mymail@mail.ru", 
        title: "Новая заявка PRO ОКНА",
        body: {
          "Имя": values.login,
          "Телефон": values.phone
        },
        apiKey: import.meta.env.VITE_EMAIL_API_TOKEN
      })
    });
    let body = await response.json();

    if (response.status == 200)
      result.value = 'Ваша заявка отправлена'
  } catch (error) {
    console.log(error);
  }
}

function onInvalid() {
  result.value = 'Проверьте правильность заполнения формы'
}

const onSubmitRequest = handleSubmit(onSuccess, onInvalid)
</script>
<template>
  <v-container class="consultation-container">
    <v-row style="margin: 0">
      <v-col cols="12" class="consultation-text-form-container">
        <p>Записаться на консультацию</p>
      </v-col>

      <v-col cols="12" class="consultation-form-container">
        <v-form @submit.prevent="onSubmitRequest">
          <v-row class="flex justify-center">
            <v-col cols="12" md="6">
              <input type="text" name="login" v-model="login.value.value" placeholder="ФИО"
                class="input-consultation-container" />
              <Transition>
                <div v-if="login.errors.value.length > 0" class="errors-container">
                  {{ login.errors.value[0] }}
                </div>
              </Transition>
            </v-col>
            <v-col cols="12" md="6">
              <div class="flex flex-col">
                <input type="tel" name="phone" v-model="phone.value.value" placeholder="Номер телефона"
                  class="input-consultation-container" />
                <Transition name="fade">
                  <div v-if="phone.errors.value.length > 0" class="errors-container">
                    {{ phone.errors.value[0] }}
                  </div>
                </Transition>
              </div>
            </v-col>

            <v-col cols="12" class="flex justify-center">
              <v-checkbox v-model="consent.value.value" :error-messages="consent.errorMessage.value" hide-details="auto"
                required>
                <template #label>
                  <span>
                    Даю согласие на&nbsp;
                    <a class="agreement-highlight" href="/personal-data-agreement.pdf" target="_blank">
                      обработку персональных данных
                    </a>
                  </span>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>

          <div class="div-button-consultation-container" style="justify-content: center">
            <MyAccentButton class="button-consultation-container" :disabled="!meta.valid" type="submit">
              Отправить заявку
            </MyAccentButton>
          </div>

          <div v-if="result" class="result-message mt-4 text-center">
            {{ result }}
          </div>
        </v-form>
      </v-col>
    </v-row>
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
  margin-top: 100px;
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
</style>
