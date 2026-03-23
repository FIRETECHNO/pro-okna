<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import BackButton from '@/components/BackButton.vue'

const steps = [
  {
    number: 1,
    title: 'Заказ на сайте',
    description: 'Заполните <a href="#order-form">форму</a>, это занимает не больше минуты',
  },
  {
    number: 2,
    title: 'Изготовление на производстве',
    description: 'Мы сами изготовим окна по вашим размерам от 3 до 5 рабочих дней',
  },
  {
    number: 3,
    title: 'Доставка на дом или самовывоз со склада',
    description:
      'Мы свяжемся с вами, когда окна будут готовы и доставим, если это будет необходимо',
  },
]
</script>
<template>
  <div>
    <!-- 
    <div class="first-section-image" :style="{ backgroundImage: `url(${'/images/views/ViewsBlockImage.jpg'})` }">
    </div> -->
    <!-- style="margin: clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0 clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0;" -->
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <BackButton />
        </v-col>
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <h1 class="mb-6">Окна на заказ</h1>

          <v-row>
            <v-col cols="12">
              <div class="relative pl-8">
                <div class="absolute left-0 top-0 bottom-0 current-bg" style="width: 3px"></div>
                <div v-for="(step, index) in steps" :key="index" class="mb-12 relative">
                  <div style="
                      width: 12px;
                      height: 12px;
                      border-radius: 999px;
                      left: calc(-32px - 4px);
                      top: calc(50% - 16px);
                    " class="absolute current-bg"></div>
                  <h3 class="text-lg md:text-xl font-bold">{{ step.number }}. {{ step.title }}</h3>
                  <p class="text-lg" v-html="step.description"></p>
                </div>

                <!-- <i class="text-lg">Первичные интервью больше не нужны.</i> -->
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-row class="d-flex justify-center" id="order-form">
      <v-col cols="12" md="10" lg="8">
        <SignUpConsultation></SignUpConsultation>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
:deep(a) {
  text-decoration: underline !important;
}

.current-bg {
  background-color: red;
}

.first-section-image {
  height: 40vh;
  width: 100vw;
  background-size: cover;
}

h1 {
  font-size: clamp(2rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h3 {
  font-size: clamp(1.5rem, 1.2017rem + 0.8523vw, 1.875rem);
}

p {
  font-size: clamp(1.25rem, 1.0511rem + 0.5682vw, 1.5rem);
}

/* p {
  font-size: clamp(1.125rem, 0.8267rem + 0.8523vw, 1.5rem);
  margin-top: 30px;
  font-weight: 300;
} */
</style>
