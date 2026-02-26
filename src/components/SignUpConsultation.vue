<script setup lang="ts">
import MyAccentButton from './MyAccentButton.vue'
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'

let request = ref({
  login: '',
  phone: '',
})
let result = ref('')
const schemaOfRequest = yup.object({
  login: yup.string().required(),
  phone: yup.number().min(11).required(),
})

let formRequest = useForm({
  validationSchema: schemaOfRequest,
})

let metaRequest = formRequest.meta
let handleSubmitRequest = formRequest.handleSubmit

const login = useField('login')
const phone = useField('phone')

login.value.value = request.value.login
phone.value.value = request.value.phone
function onSuccess(values: any) {
  result.value = 'Ваша заявка отправлена'
}
function onInvalid(error: any) {
  result.value = 'Форма заявки заполнена неверно'
}
const onSubmitRequest = handleSubmitRequest(onSuccess, onInvalid)
</script>
<template>
  <v-container class="consultation-container">
    <v-row>
      <v-col cols="12" class="consultation-text-form-container">
        <p>Записаться на консультацию</p>
      </v-col>
      <v-col cols="12" class="consultation-form-container">
        <v-form @submit.prevent="onSubmitRequest">
          <div class="inputes-consultation-container">
            <input
              type="login"
              name="login"
              v-model="login.value.value"
              placeholder="ФИО"
              class="input-consultation-container"
              required
            />
            <input
              type="phone"
              name="phone"
              v-model="phone.value.value"
              placeholder="Номер телефона"
              class="input-consultation-container"
              required
            />
          </div>
          <div class="div-button-consultation-container" style="justify-content: center">
            <MyAccentButton class="button-consultation-container">Отправить заявку</MyAccentButton>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.consultation-container {
  margin-top: 100px;
  border-radius: 16px;
  background-color: rgba(217, 217, 217, 1);
  padding: 12px;
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
  width: 47%;
  height: 5vh;
  min-height: 50px;
  border-radius: 16px;
  background-color: white;
  color: rgba(0, 0, 0, 0.61);
  font-family: 'Montserrat Variable';
  font-weight: 400;
  font-size: 20px;
  padding-left: 30px;
  margin-bottom: 20px;
}
.inputes-consultation-container {
  display: flex;
  justify-content: space-around;
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
