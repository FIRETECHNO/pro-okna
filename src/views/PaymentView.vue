<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue';
</script>
<template>
  <div>

    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="10" lg="8">
          <h1>Рассрочка</h1>
          <p>Рассрочка до 6 месяцев от компании, предоставляется без услуг банка. <br>
            <br>
            Переплата - 0 рублей. <br>

            Предоставляется только конструкции с монтажом и «под ключ» (с откосами, подоконником, отливом на окна). На
            лоджии
            и балконы с монтажом. <br>
            <br>
            Условия: <br>
            - постоянная регистрация совпадающая с местом проведения работ
          </p>
        </v-col>

      </v-row>

    </v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="10" lg="8">
        <SignUpConsultation />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
h1 {
  font-size: clamp(1.5rem, 0.8537rem + 1.8466vw, 2.3125rem);
  font-weight: 800;
}

p {
  font-size: clamp(1.25rem, 1.0511rem + 0.5682vw, 1.5rem);
  font-weight: 500;
}
</style>