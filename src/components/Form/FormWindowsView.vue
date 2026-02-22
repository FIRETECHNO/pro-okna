<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue'
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
  phone: yup.number().min(11).required(),
  email: yup.string().email().required(),
  comment: yup.string(),
})

let formRequest = useForm({
  validationSchema: schemaOfRequest,
})

let metaRequest = formRequest.meta
let handleSubmitRequest = formRequest.handleSubmit

const login = useField('login')
const phone = useField('phone')
const email = useField('email')
const comment = useField('comment')

login.value.value = request.value.login
phone.value.value = request.value.phone
email.value.value = request.value.email
comment.value.value = request.value.comment
function onSuccess(values: any) {
  result.value = 'Ваша заявка отправлена'
}
function onInvalid(error: any) {
  result.value = 'Форма заявки заполнена неверно'
}
const onSubmitRequest = handleSubmitRequest(onSuccess, onInvalid)
</script>
<template>
  <v-container style="max-width: 100% !important; padding: 0px">
    <v-row class="form-block-container">
      <v-col cols="12" md="4" style="height: 1%">
        <p class="text-by-form">Оставьте заявку — мы перезвоним в течение 15 минут</p>
      </v-col>
      <v-col cols="12" md="4" class="form-container">
        <v-form @submit="onSubmitRequest">
          <input
            class="text-input-container"
            type="login"
            name="login"
            v-model="login.value.value"
            placeholder="ФИО *"
            required
          />
          <input
            class="text-input-container"
            type="phone"
            name="phone"
            v-model="phone.value.value"
            placeholder="Телефон *"
            required
          />
          <input
            class="text-input-container"
            type="email"
            name="email"
            v-model="email.value.value"
            placeholder="Почта *"
            required
          />
          <input
            class="text-input-container comment-input"
            placeholder="Комментарий"
            type="comment"
            name="comment"
            v-model="comment.value.value"
          />
          <div
            style="height: 100px"
            id="captcha-container"
            class="smart-captcha"
            data-sitekey="ysc1_A8A6utxbx5AKfmsemexgT466KnOJY5tlD4afLP7tf09e6631"
          ></div>
          <div class="result-form">{{ result }}</div>
          <button type="submit" class="button-form">Отправить</button>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.form-block-container {
  display: flex;
  justify-content: space-around;
  padding-top: 5vh;
  height: 75vh;
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
  justify-content: flex-start;
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
  width: 70%;
  height: 15%;
}

.comment-input {
  align-items: start;
  padding-bottom: 5%;
  white-space: normal;
  text-wrap: pre-wrap;
  height: 22%;
}
.smart-captcha {
  border-radius: 15px;
  margin-top: 12px;
  min-width: 100px;
  width: 70%;
  height: 22%;
}
.result-form {
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 100%;
  color: white;
  text-align: center;
  width: 70%;
  margin-top: 4px;
}
.button-form {
  width: 70%;
  height: 14%;
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
    padding-left: 20px;
    padding-top: 0px;
  }
  .text-input-container {
    width: 60%;
  }
  .smart-captcha {
    width: 60%;
    height: 12%;
    max-height: 100px;
  }
  .button-form {
    width: 60%;
  }
  .result-form {
    width: 60%;
  }
}
@media (max-width: 768px) {
  .text-input-container {
    height: 12%;
  }
  .comment-input {
    height: 19%;
  }
  .result-form {
    font-size: 14px;
  }
}
@media (max-width: 500px) {
  .text-by-form {
    font-size: 16px;
    width: 60%;
  }
}
</style>
