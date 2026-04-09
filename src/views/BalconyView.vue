<script setup lang="ts">
import { ref } from 'vue'
import BlockImage from '@/components/BlockImage.vue'
import Advantage from '@/components/Advantage.vue'
import CardService from '@/components/CardService.vue'
import FormWindowsView from '@/components/Form/FormWindowsView.vue'
import OurProducts from '@/components/OurProducts.vue'
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import Reviews from '@/components/Reviews.vue'

const servicesRef = ref<HTMLElement | null>(null)

const scrollServices = (direction: 'left' | 'right') => {
  if (servicesRef.value) {
    const scrollAmount = 250
    servicesRef.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }
}

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
    text: 'До 6 мес без процентов и банка.',
  },
  {
    icon: 'mdi-shield-check-outline',
    name: 'Гарантия до 5 лет',
    text: 'На материалы и выполненные работы.',
  },
]

const services = [
  {
    imageUrl: '/images/balcony/services/GlazingBalconies.png',
    textButton: 'Остекление балконов',
    variantsService: '',
    url: '/glazing-balconies',
  },
  // {
  //   imageUrl: '/images/balcony/services/InsulationBalconies.png',
  //   textButton: 'Утепление балконов',
  //   variantsService: '',
  //   url: '/insulation-balconies',
  // },
  {
    imageUrl: '/images/balcony/services/InteriorDecoration.jpg',
    textButton: 'Отделка балконов',
    variantsService: '',
    url: '/interior-decoration',
  },
  {
    imageUrl: '/images/balcony/services/AdditionalProducts.png',
    textButton: 'Шкафы, сушилки',
    variantsService: '',
    url: '/additional-products',
  },
]

const images = [
  '/images/balcony/services/GlazingBalconies.png',
  '/images/balcony/services/InteriorDecoration.jpg',
  '/images/balcony/services/AdditionalProducts.png',
  '/images/balcony/services/WoodClapboard.webp',
  '/images/balcony/services/PVCPanels.jpg',
  '/images/views/our-products/3.jpg',
  '/images/views/services/CustomWindows.jpg',
  '/images/views/services/InstallationWindows.webp',
]
</script>
<template>
  <div>
    <v-container class="block-image">
      <BlockImage image-url="/images/balcony/BalconyBlockImage.jpg">
        <template #mainText>
          скидки<br />
          на балконы
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
      <div class="services-navigation">
        <button @click="scrollServices('left')" class="nav-btn nav-btn-left">
          <v-icon>mdi-chevron-left</v-icon>
        </button>
        <button @click="scrollServices('right')" class="nav-btn nav-btn-right">
          <v-icon>mdi-chevron-right</v-icon>
        </button>
      </div>
      <div ref="servicesRef" class="services-scroll no-scrollbar">
        <v-row style="flex-wrap: nowrap; display: flex" class="justify-start no-scrollbar">
          <v-col cols="8" sm="5" md="4" lg="3" v-for="service in services" class="card-service ms-md-auto me-md-auto">
            <CardService :key="service.imageUrl" :image-url="service.imageUrl" :url="service.url"
              :text-button="service.textButton" :variants-service="service.variantsService">
            </CardService>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div id="order-form">
      <FormWindowsView></FormWindowsView>
    </div>
    <OurProducts :url-images="images"></OurProducts>
    <Reviews></Reviews>
    <v-container style="padding: 0">
      <v-row style="width: 100%; display: flex; justify-content: center; margin: 0px">
        <v-col cols="12" md="10" lg="8" style="padding: 0; width: 100%">
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
  height: 50vh;
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
  justify-items: space-between;
  align-items: center;
  padding-top: 10px !important;
  min-height: calc(100vh - 50vh - 157px);
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
  margin-bottom: 100px;
  position: relative;
}

.services-scroll {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  overflow-y: hidden;
}

.services-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  z-index: 10;
  padding: 0 5px;
}

.card-service {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 20%; */
}


.nav-btn {
  pointer-events: auto;
  width: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem);
  height: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem);
  background: rgba(217, 217, 217, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 !important;
}


@media (min-width: 800px) {
  .services-navigation {
    display: none;
  }
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
