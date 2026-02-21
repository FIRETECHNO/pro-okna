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
  <v-container class="form-block-container">
    <p class="text-by-form">Оставьте заявку — мы перезвоним в течение 15 минут</p>
    <v-form @submit="onSubmitRequest" class="form-container">
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
  </v-container>
</template>
<style scoped>
.form-block-container {
  display: flex;
  justify-content: center;
  max-width: 100% !important;
  height: 65vh;
  padding-top: 5vh;
  background-image: url('/images/FormBlock.png');
  background-color: rgba(0, 0, 0, 0.5);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
}
.text-by-form {
  font-size: 3vw;
  width: 40%;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 150%;
  color: white;
  padding-left: 20px;
  overflow-wrap: break-word;
}
.form-container {
  height: 75%;
  width: 40%;
  padding-left: 12vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  height: 14%;
  min-width: 250px;
}

.comment-input {
  align-items: start;
  padding-bottom: 5%;
  white-space: normal;
  text-wrap: pre-wrap;
}
.smart-captcha {
  border-radius: 15px;
  height: 28%;
  margin-top: 12px;
  min-width: 250px;
  min-height: 150px;
}
.result-form {
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 100%;
  color: white;
  text-align: center;
  min-width: 250px;
}
.button-form {
  margin-top: 10px;
  min-width: 250px;
  height: 14%;
  font-family: 'Montserrat Variable';
  font-weight: 400;
  line-height: 100%;
  border-radius: 14px;
  user-select: none;
  padding: 12px 24px;
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
@media (max-width: 768px) {
  .text-by-form {
    font-size: 20px;
    width: 60%;
  }
  .form-block-container {
    flex-direction: column;
  }
  .form-container {
    padding-left: 20px;
  }
}
@media (max-width: 500px) {
  .text-by-form {
    font-size: 16px;
    width: 100%;
  }
}
</style>
