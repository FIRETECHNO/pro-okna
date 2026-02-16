<script setup lang="ts">
import BlockImage from '@/components/BlockImage.vue'
import imageUrl from '@/assets/images/ViewsBlockImage.jpg'
import Advantage from '@/components/Advantage.vue'

const advantages = [
  {
    icon: 'mdi-medal-outline',
    name: 'Собственное производство',
    text: 'Работаем без посредников — честные цены и контроль качества.',
  },
  {
    icon: 'mdi-clipboard-list-outline',
    name: 'Бесплатный замер',
    text: 'Выезд специалиста в удобное для вас время.',
  },
  {
    icon: 'mdi-pin-outline',
    name: 'Рассрочка без переплат',
    text: 'Оформление рассрочки до 12 месяцев.',
  },
  {
    icon: 'mdi-shield-check-outline',
    name: 'Гарантия до 5 лет',
    text: 'На материалы и выполненные работы.',
  },
]
</script>
<template>
  <v-container class="block-image">
    <BlockImage :image-url="imageUrl">
      <template #mainText>
        окна<br />
        со скидкой до
      </template>
      <template #discount>
        <p style="color: #e52e2a">-40%</p>
      </template>
    </BlockImage>
  </v-container>
  <p class="header-advantages">работаем <span style="color: #e52e2a">C 2004 года</span></p>
  <v-container class="block-advantages">
    <Advantage v-for="advantage in advantages" :key="advantage.icon" :icon="advantage.icon" :name="advantage.name"
      :text="advantage.text">
    </Advantage>
  </v-container>
</template>
<style scoped>
.block-image {
  max-width: 100% !important;
  padding: 16px 0px 0px 0px;
  height: 65vh;
}

.header-advantages {
  text-align: center;
  font-size: 25px;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  text-transform: uppercase;
  line-height: 50px;
  padding-bottom: 6px;
}

.block-advantages {
  /* max-width: 100% !important; */
  display: flex;
  padding: 6px 8px 0px 8px;
  justify-items: space-between;
}

@media (max-width: 767px) {
  .block-advantages {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
  }

  .header-advantages {
    font-size: 20px;
  }
}
</style>
