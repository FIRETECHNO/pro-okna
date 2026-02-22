<script setup lang="ts">
import BlockImage from '@/components/BlockImage.vue'
import Advantage from '@/components/Advantage.vue'
import CardService from '@/components/CardService.vue'
import FormWindowsView from '@/components/Form/FormWindowsView.vue'

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

const services = [
  {
    imageUrl: '/images/services/CustomWindows.png',
    textButton: 'Окна на заказ',
    variantsService: 'без монтажа',
  },
  {
    imageUrl: '/images/services/InstallationWindows.png',
    textButton: 'Окна с монтажем',
    variantsService: 'под ключ',
  },
  {
    imageUrl: '/images/services/Glazing.png',
    textButton: 'Остекление',
    variantsService: 'веранды, беседки, терассы',
  },
  {
    imageUrl: '/images/services/CountryWindows.png',
    textButton: 'Дачные окна',
    variantsService: '',
  },
]
</script>
<template>
  <v-container class="block-image">
    <BlockImage image-url="/images/ViewsBlockImage.jpg">
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
    <Advantage
      v-for="advantage in advantages"
      :key="advantage.name"
      :icon="advantage.icon"
      :name="advantage.name"
      :text="advantage.text"
    >
    </Advantage>
  </v-container>
  <p class="header-services">наши услуги</p>
  <v-container class="block-services">
    <v-row style="flex-wrap: nowrap">
      <v-col cols="12" sm="12" md="3" lg="3" v-for="service in services" class="card-service">
        <CardService
          :key="service.imageUrl"
          :image-url="service.imageUrl"
          :text-button="service.textButton"
          :variants-service="service.variantsService"
        >
        </CardService>
      </v-col>
    </v-row>
  </v-container>
  <FormWindowsView></FormWindowsView>
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
}

.block-advantages {
  display: flex;
  padding: 6px 8px 0px 8px;
  justify-items: space-between;
}

.header-services {
  font-size: 24px;
  font-family: 'Montserrat Variable';
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-align: center;
}

.block-services {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
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
