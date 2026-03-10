<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue';
</script>
<template>
  <div>

    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="10" lg="8">
          <h1>Рассрочка</h1>
          <p>Рассрочка до 6 месяцев от компании, без процентов и банка. <br>
            Переплата - 0 рублей. <br> <br>

            Предоставляется только на конструкции с монтажом («под ключ»), <br> на остекление и отделку балконов и
            лоджий.
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