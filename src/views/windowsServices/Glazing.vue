<script setup lang="ts">
import FormWindowsView from '@/components/Form/FormWindowsView.vue';
import BackButton from '@/components/BackButton.vue';
</script>
<template>
  <div>
    <BackButton />
    <div class="first-section-image" :style="{ backgroundImage: `url(${'/images/views/ViewsBlockImage.jpg'})` }">
    </div>

    <v-container
      style="margin: clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0 clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0;">
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <h1>Остекление веранды, беседки, террасы</h1>
          <h2>Комфортный отдых на свежем воздухе в любую погоду</h2>
          <p>Остекление веранд, беседок и террас под ключ — делаем открытые пространства комфортными в любую погоду.
            Предлагаем два решения: холодное остекление алюминиевым профилем для защиты от ветра и дождя или теплое с
            энергосберегающими стеклопакетами для круглогодичного использования. Устанавливаем раздвижные и распашные
            системы — экономим место и сохраняем панорамный обзор. Возможно тонирование и ламинация в любой цвет. Монтаж
            с гарантией. Бесплатный выезд замерщика для подбора оптимального варианта.</p>
        </v-col>
      </v-row>
    </v-container>

    <FormWindowsView />
  </div>
</template>
<style scoped>
.first-section-image {
  height: 40vh;
  width: 100vw;
  background-size: cover;
}

h1 {
  font-size: clamp(1.25rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h2 {
  font-size: clamp(1.25rem, 0.7528rem + 1.4205vw, 1.875rem);
}

p {
  font-size: clamp(1.125rem, 0.8267rem + 0.8523vw, 1.5rem);
  margin-top: 30px;
  font-weight: 300;
}
</style>