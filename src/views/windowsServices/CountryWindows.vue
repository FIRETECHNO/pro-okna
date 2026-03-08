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
          <h1>Дачные окна</h1>
          <h2>Надежные окна для дачи: тепло зимой, проветривание летом</h2>
          <p>Дачные окна на заказ. Специально для загородных домов и сезонного проживания предлагаем практичные и
            недорогие
            решения. Конструкции адаптированы к российскому климату: выдерживают морозы и жару, сохраняют тепло и не
            пропускают пыль.Делаем стандартные и нестандартные размеры, ставим любую фурнитуру. Монтаж выполняем по
            технологии с утеплением и герметизацией швов. Вы получаете готовые окна, которые прослужат долгие годы.
            Гарантия
            до 5 лет. Выезд замерщика бесплатно.</p>
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