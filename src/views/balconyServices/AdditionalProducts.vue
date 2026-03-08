<script setup lang="ts">
import FormWindowsView from '@/components/Form/FormWindowsView.vue'
import BackButton from '@/components/BackButton.vue'
</script>
<template>
  <div>
    <BackButton />

    <div
      class="first-section-image"
      :style="{ backgroundImage: `url(${'/images/balcony/BalconyBlockImage.png'})` }"
    ></div>

    <v-container
      style="
        margin: clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0
          clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0;
      "
    >
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <h1>Сопутствующие товары</h1>
          <h2>Все необходимое для комфорта и функциональности ваших окон</h2>
          <p>
            Сопутствующие товары для окон и балконов — дополняем остекление всем необходимым для
            максимального комфорта. Предлагаем широкий выбор аксессуаров и комплектующих: <br />•
            Москитные сетки (рамные, раздвижные, рулонные) — надежная защита от насекомых.<br /> •
            Подоконники и отливы — пластиковые, алюминиевые, любых размеров и цветов.<br /> • Откосы
            — сэндвич-панели, пластик, штукатурка под покраску.<br /> • Вентиляционные клапаны —
            приточная вентиляция без потери тепла.<br /> • Детские замки и блокираторы —
            безопасность для семей с детьми.<br /> • Жалюзи и рулонные шторы — защита от солнца и
            посторонних глаз. Все товары в наличии и под заказ. Помогаем подобрать оптимальный
            вариант под ваши окна и бюджет. Доставка и установка под ключ. Бесплатный выезд
            замерщика для консультации.
          </p>
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
