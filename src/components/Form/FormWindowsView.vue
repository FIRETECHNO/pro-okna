<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { ref, onMounted } from 'vue'
import * as yup from 'yup'

let request = ref({
  login: '',
  phone: '',
  email: '',
  comment: '',
})
let result = ref('')
const schemaOfRequest = yup.object({
  login: yup.string().required(),
  phone: yup
    .string()
    .required('Укажите телефон')
    .matches(/^\+?\d{10,12}$/, 'Неверный формат телефона'),
  email: yup.string().email().required(),
  comment: yup.string(),
  consent: yup
    .boolean()
    .oneOf([true], 'Необходимо дать согласие на обработку персональных данных'),
})

let formRequest = useForm({
  validationSchema: schemaOfRequest,
})

let handleSubmitRequest = formRequest.handleSubmit

const login = useField('login')
const phone = useField('phone')
const email = useField('email')
const comment = useField('comment')
const consent = useField('consent')

login.value.value = request.value.login
phone.value.value = request.value.phone
email.value.value = request.value.email
comment.value.value = request.value.comment

let captchaToken = '';

async function checkToken(): Promise<boolean> {
  try {
    console.log(captchaToken);

    let res = await fetch("https://functions.yandexcloud.net/d4e1o2dt1n15ah338ais", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: captchaToken
      })
    })
    if (res.status == 200) {
      return true
    }
    return false
  } catch (error) {
    return false
  }
}

async function onSuccess(values: any) {
  try {
    let isTokenValid = await checkToken()
    if (!isTokenValid) return;

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
          "Телефон": values.phone,
          "Емейл": values.email,
          "Комментарий": values.comment
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

function onInvalid(error: any) {
  result.value = 'Форма заявки заполнена неверно'
}
const onSubmitRequest = handleSubmitRequest(onSuccess, onInvalid)

declare global {
  interface Window {
    smartCaptcha: any
  }
}

onMounted(() => {
  const script = document.createElement("script")
  script.src = "https://smartcaptcha.yandexcloud.net/captcha.js"
  script.defer = true

  script.onload = () => {
    window.smartCaptcha.render("captcha-container", {
      sitekey: import.meta.env.VITE_SC_TOKEN,
      callback: (token: string) => {
        console.log("captcha token:", token)
        captchaToken = token;
      }
    })
  }

  document.head.appendChild(script)
})
</script>
<template>
  <v-container style="max-width: 100% !important; padding: 0px">
    <v-row class="form-block-container">
      <v-col cols="12">
        <p class="text-by-form">Оставьте заявку — мы перезвоним в течение 15 минут</p>
      </v-col>
      <v-col cols="0" md="6" style="height: 0; padding: 0;">

      </v-col>
      <v-col cols="12" sm="8" md="4" class="form-container">
        <v-form @submit="onSubmitRequest" class="form-windows">
          <input class="text-input-container" type="login" name="login" v-model="login.value.value" placeholder="ФИО *"
            required />
          <input class="text-input-container" type="phone" name="phone" v-model="phone.value.value"
            placeholder="Телефон *" required />
          <input class="text-input-container" type="email" name="email" v-model="email.value.value"
            placeholder="Почта *" required />
          <input class="text-input-container comment-input" placeholder="Комментарий" type="comment" name="comment"
            v-model="comment.value.value" />
          <div style="height: 100px" id="captcha-container" class="smart-captcha"
            data-sitekey="ysc1_A8A6utxbx5AKfmsemexgT466KnOJY5tlD4afLP7tf09e6631"></div>
          <div style="color: white;">
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
          </div>
          <div class="result-form">{{ result }}</div>
          <button type="submit" class="button-form">Отправить</button>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.agreement-highlight {
  color: #e52e2a;
  font-weight: 600;
  text-decoration: underline;
}

.form-block-container {
  display: flex;
  justify-content: space-around;
  padding-top: 5vh;
  padding-bottom: 5vh;
  /* height: 100vh; */
  background-image: url('/images/FormBlock.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
}

.text-by-form {
  font-size: 3vw;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 150%;
  color: white;
  padding-left: 20px;
  overflow-wrap: break-word;
}

.form-container {
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: space-between;
}

.text-input-container {
  background-color: white;
  border-radius: 14px;
  font-family: 'Montserrat Variable';
  font-weight: 300;
  font-size: clamp(12px, 1.5vw, 3vw);
  margin-top: 10px;
  padding-left: 20px;
  width: 100%;
  height: 70px;
}

.comment-input {
  align-items: start;
  padding-bottom: 5%;
  white-space: normal;
  text-wrap: pre-wrap;
}

.smart-captcha {
  border-radius: 15px;
  margin-top: 12px;
  min-width: 100px;
  width: 100%;
  height: 100px;
}

.result-form {
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 100%;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: 4px;
}

.button-form {
  width: 100%;
  /* height: 14%; */
  font-family: 'Montserrat Variable';
  font-weight: 400;
  line-height: 100%;
  border-radius: 14px;
  user-select: none;
  padding: 12px 24px;
  margin-top: 12px;
  background-color: #e52e2a;
  color: white;
  transition: 0.3s;
}

.text-input-container:focus {
  outline: none;
}

.button-form:hover {
  cursor: pointer;
  background-color: #ff5f5b;
}

.button-form:active {
  background-color: #7f1a17;
}

@media (max-width: 960px) {
  .text-by-form {
    font-size: 20px;
    width: 60%;
    padding-bottom: 0px;
  }

  .form-container {
    padding-right: 20px;
    padding-top: 0px;
    align-content: flex-end;
  }

  .smart-captcha {
    height: 100px;
  }
}

@media (max-width: 768px) {
  .text-input-container {
    height: 50px;
  }

  .comment-input {
    /* height: 19%; */
  }

  .result-form {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .form-windows {
    width: 80%;
  }
}

@media (max-width: 500px) {}
</style>
