<script setup lang="ts">
import BlockImage from '@/components/BlockImage.vue'
import Advantage from '@/components/Advantage.vue'
import CardService from '@/components/CardService.vue'
import FormWindowsView from '@/components/Form/FormWindowsView.vue'
import OurProducts from '@/components/OurProducts.vue'
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import Reviews from '@/components/Reviews.vue'

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
    text: 'До 6 мес — без процентов — без банка',
  },
  {
    icon: 'mdi-shield-check-outline',
    name: 'Гарантия до 5 лет',
    text: 'На материалы и выполненные работы.',
  },
]

const services = [
  {
    imageUrl: '/images/views/services/CustomWindows.jpg',
    textButton: 'Окна на заказ',
    variantsService: 'без монтажа',
    url: '/custom-windows',
  },
  {
    imageUrl: '/images/views/services/InstallationWindows.webp',
    textButton: 'Окна под ключ',
    variantsService: 'с монтажом',
    url: '/installation-windows',
  },
  {
    imageUrl: '/images/views/services/CountryWindows.jpg',
    textButton: 'Остекление',
    variantsService: 'веранды, беседки, терассы',
    url: '/glazing',
  },
  // {
  //   imageUrl: '',
  //   textButton: 'Дачные окна',
  //   variantsService: '',
  //   url: '/country-windows'
  // },
]

const images = [
  '/images/views/our-products/1.webp',
  '/images/views/our-products/2.jpg',
  '/images/views/our-products/3.jpg',
  '/images/views/services/CustomWindows.jpg',
  '/images/views/services/InstallationWindows.webp',
  '/images/views/services/InstallationWindows2.webp',
  '/images/views/services/Glazing.jpg',
  '/images/views/services/Glazing2.jpg',
  '/images/views/services/CountryWindows.jpg',
]
</script>
<template>
  <div>
    <v-container class="block-image">
      <BlockImage image-url="/images/views/WindowsBlockImage.jpg">
        <template #mainText>
          скидки<br />
          на окна до
        </template>
        <template #discount>
          <p style="color: #e52e2a">40%</p>
        </template>
      </BlockImage>
    </v-container>
    <v-container class="block-advantages">
      <Advantage v-for="advantage in advantages" :key="advantage.name" :icon="advantage.icon" :name="advantage.name"
        :text="advantage.text">
      </Advantage>
    </v-container>
    <p class="header-services">наши услуги</p>
    <v-container class="block-services">
      <v-row style="flex-wrap: nowrap; display: flex" class="justify-start">
        <v-col cols="8" sm="5" md="4" lg="3" v-for="service in services" class="card-service ms-md-auto me-md-auto">
          <CardService :key="service.imageUrl" :image-url="service.imageUrl" :url="service.url"
            :text-button="service.textButton" :variants-service="service.variantsService">
          </CardService>
        </v-col>
      </v-row>
    </v-container>
    <div id="order-form">
      <FormWindowsView></FormWindowsView>
    </div>
    <OurProducts :url-images="images"></OurProducts>
    <Reviews></Reviews>
    <v-container style="padding: 0px">
      <v-row style="width: 100%; display: flex; justify-content: center; margin: 0px">
        <v-col cols="12" md="10" lg="8" style="padding: 0">
          <SignUpConsultation>Записаться на бесплатный замер</SignUpConsultation>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.block-image {
  max-width: 100% !important;
  padding: 0px;
  height: 55vh;
}

.header-advantages {
  text-align: center;
  font-size: 25px;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  text-transform: uppercase;
  line-height: 50px;
}

.block-advantages {
  display: flex;
  padding: 6px 8px 0px 8px;
  justify-content: space-between;
  margin-top: 10px;
}

.header-services {
  font-size: 24px;
  font-family: 'Montserrat Variable';
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-align: center;
  margin: 20px;
}

.block-services {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  margin-bottom: 100px;
}

.card-service {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
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

  .header-services {
    font-size: 16px;
  }
}
</style>
