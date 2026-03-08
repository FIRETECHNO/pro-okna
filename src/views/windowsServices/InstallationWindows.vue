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
          <h1>Окна с монтажем под ключ</h1>
          <h2>Изготовим и установим окна любой сложности с гарантией до 5 лет</h2>
          <p>Предлагаем полный цикл услуг: изготовление окон на заказ и профессиональный монтаж под ключ. Реализуем
            проекты любой сложности — от классических прямоугольных до нестандартных арочных и панорамных конструкций.
            Работаем с надежной немецкой фурнитурой и многокамерными энергосберегающими стеклопакетами. Монтаж проводим
            строго по технологии с утеплением и качественной отделкой. Вы получаете готовые окна, которые не пропускают
            шум и холод. Гарантия на работу — до 5 лет. Выезд замерщика и смета — бесплатно.</p>
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