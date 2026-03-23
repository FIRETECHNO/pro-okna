<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import Reviews from '@/components/Reviews.vue'
</script>
<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="10" lg="8">
          <h1>Рассрочка</h1>
          <p>
            Рассрочка до 6 месяцев от компании, без процентов и банка. <br /><br />
            Почему это выгодно: <br />
            — <b>0% переплаты</b> — платите ровно столько сколько стоит товар. <br />
            — <b>Гибкий срок</b> — выбираете период от 1 до 6 месяцев <br />
            — <b>Минимум документов</b> — достаточно паспорта и пары минут на оформление.
            <br /><br />
            Подробный график прописан в договоре. <br />
            * Предоставляется только на конструкции с монтажом.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="10" lg="8">
        <SignUpConsultation>Записаться на бесплатный замер</SignUpConsultation>
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
