<script setup lang="ts">
import MyAccentButton from './components/MyAccentButton.vue'
import ContactsFab from './components/ContactsFab.vue'
import Footer from './components/Footer.vue'
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useHead } from '@vueuse/head'

const route = useRoute()
const router = useRouter()
const display = useDisplay()

// Адаптив
let mdAndUp = computed(() => display.mdAndUp.value)

// Навигация + SEO данные
let navBtns = ref([
  {
    name: 'Окна',
    url: '/',
    isActive: false,
    title: 'Пластиковые окна в Перми | Продажа и установка | PRO ОКНА',
    description:
      'Качественные пластиковые окна по лучшим ценам в Перми. Собственное производство, бесплатный замер, гарантия до 5 лет. Звоните: +7 (950) 473-91-17',
  },
  {
    name: 'Балконы',
    url: '/balcony',
    isActive: false,
    title: 'Остекление балконов в Перми | Балконы под ключ | PRO ОКНА',
    description:
      'Остекление балконов и лоджий в Перми. Отделка, утепление, балконы под ключ. Собственное производство, бесплатный замер.',
  },
  {
    name: 'Ремонт окон',
    url: '/windows-repair',
    isActive: false,
    title: 'Ремонт пластиковых окон в Перми | PRO ОКНА',
    description:
      'Профессиональный ремонт пластиковых окон в Перми. Регулировка, замена уплотнителей, фурнитуры, стеклопакетов. Быстро и качественно.',
  },
  {
    name: 'Рассрочка',
    url: '/payment',
    isActive: false,
    title: 'Рассрочка без переплат | PRO ОКНА',
    description:
      'Рассрочка до 6 месяцев без процентов и банка. Оформление на месте, минимум документов. Акция на окна со скидкой до 40%.',
  },
])

let navigationDrawer = ref(false)

// Активная страница
const activePage = computed(() => navBtns.value.find((btn) => btn.url === route.path))

// SEO для всех страниц
const seoData: Record<string, { title: string; description: string }> = {
  '/custom-windows': {
    title: 'Окна на заказ в Перми | Изготовление по размерам | PRO ОКНА',
    description:
      'Окна на заказ в Перми. Изготовление по вашим размерам за 3-5 дней. Собственное производство, бесплатный замер, гарантия.',
  },
  '/installation-windows': {
    title: 'Окна под ключ в Перми | Установка с монтажом | PRO ОКНА',
    description:
      'Окна под ключ в Перми. Установка с монтажом, доставка. Профессиональный монтаж, гарантия 5 лет. Звоните: +7 (950) 473-91-17.',
  },
  '/glazing': {
    title: 'Остекление веранд и беседок в Перми | PRO ОКНА',
    description:
      'Остекление веранд, беседок, террас в Перми. Качественное остекление, доступные цены. Бесплатный замер.',
  },
  '/additional-products': {
    title: 'Дополнительные товары для окон и балконов | PRO ОКНА',
    description:
      'Москитные сетки, подоконники, откосы и другие комплектующие для окон. Высокое качество, доступные цены.',
  },
  '/glazing-balconies': {
    title: 'Остекление балконов в Перми | PRO ОКНА',
    description:
      'Профессиональное остекление балконов в Перми. Пластиковое и алюминиевое остекление, отделка под ключ.',
  },
  '/interior-decoration': {
    title: 'Отделка балконов внутри в Перми | PRO ОКНА',
    description:
      'Внутренняя отделка балконов: ПВХ-панели, деревянная вагонка. Качественные материалы, профессиональный монтаж.',
  },
}

const getSeoTitle = () => {
  return (
    seoData[route.path]?.title || activePage.value?.title || 'PRO ОКНА — Пластиковые окна в Перми'
  )
}

const getSeoDescription = () => {
  return (
    seoData[route.path]?.description ||
    activePage.value?.description ||
    'Качественные окна и балконы в Перми'
  )
}

// SEO через computed
useHead(
  computed(() => ({
    title: getSeoTitle(),
    meta: [
      {
        name: 'description',
        content: getSeoDescription(),
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: getSeoTitle() },
      { property: 'og:description', content: getSeoDescription() },
      { property: 'og:image', content: 'https://pro-okna59.ru/og-image.png' },
      { property: 'og:url', content: `https://pro-okna59.ru${route.path}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'PRO ОКНА' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://pro-okna59.ru/og-image.png' },
    ],
    link: [{ rel: 'canonical', href: `https://pro-okna59.ru${route.path}` }],
  })),
)

// Подсветка активной кнопки навигации
const updateActiveBtns = () => {
  navBtns.value.forEach((btn) => {
    btn.isActive = btn.url === route.path
  })
}

// Вызываем сразу и при каждой смене маршрута
updateActiveBtns()
watch(() => route.path, updateActiveBtns)
</script>

<template>
  <v-responsive>
    <v-app>
      <ContactsFab />
      <v-app-bar flat height="prominent">
        <v-container v-if="mdAndUp">
          <v-row class="flex justify-between">
            <v-col class="flex justify-start" cols="auto">
              <a href="/">
                <img src="/icons/logo-old-variant.png" style="height: 50px" :draggable="false" />
              </a>
              <div class="flex flex-col justify-center">
                <a href="tel:+7(950)473-91-17" class="underline"> Заказать звонок </a>
                <a href="tel:+7(950)473-91-17" class="font-bold no-underline">
                  <v-icon size="20">mdi-phone</v-icon>
                  +7 (950) 473-91-17
                </a>
              </div>
            </v-col>
            <v-col class="flex flex-row items-center justify-end" cols="auto">
              <a href="https://yandex.ru/maps/-/CPq3QR25" target="_blank">
                <div class="mr-10">
                  <u> Адрес офиса </u>
                  <div>
                    <v-icon color="primary" size="20">mdi-map-marker</v-icon>
                    <b> ул. Стахановская, 43 </b>
                  </div>
                </div>
              </a>
              <a href="tel:+7(950)473-91-17">
                <MyAccentButton>Вызвать мастера на замер</MyAccentButton>
              </a>
            </v-col>
            <v-divider></v-divider>
          </v-row>

          <v-row class="flex justify-between">
            <v-col cols="auto" class="flex justify-center" v-for="(btn, index) of navBtns">
              <button
                @click="router.push(btn.url)"
                class="nav-btn"
                :class="btn.isActive ? 'nav-btn-active' : ''"
              >
                {{ btn.name }}
              </button>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else>
          <v-row class="flex justify-between">
            <v-col cols="auto">
              <a href="/">
                <img src="/icons/logo-old-variant.png" style="height: 50px" :draggable="false" />
              </a>
            </v-col>
            <v-col cols="auto" style="display: flex; align-items: center; font-size: 24px">
              <v-icon class="menu-icon" @click="navigationDrawer = !navigationDrawer"
                >mdi-menu</v-icon
              >
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer
        v-if="!mdAndUp"
        v-model="navigationDrawer"
        location="right"
        :width="display.width.value ?? '300px'"
        style="padding-top: 102px"
      >
        <div class="flex flex-col justify-between" style="height: 100%">
          <v-row class="flex justify-center">
            <v-col class="flex justify-center" cols="12" v-for="(btn, index) of navBtns">
              <button
                @click="router.push(btn.url)"
                class="nav-btn"
                :class="btn.isActive ? 'nav-btn-active' : ''"
              >
                {{ btn.name }}
              </button>
            </v-col>
          </v-row>
          <v-row class="flex justify-center">
            <v-col class="flex justify-center" cols="12">
              <div class="flex flex-col justify-center">
                <MyAccentButton class="mb-5">Вызвать мастера на замер</MyAccentButton>
                <a href="tel:+7(950)473-91-17" class="underline"> Заказать звонок </a>
                <a href="tel:+7(950)473-91-17" class="font-bold no-underline">
                  <v-icon size="20">mdi-phone</v-icon>
                  +7 (950) 473-91-17
                </a>
                <a href="https://yandex.ru/maps/-/CPq3QR25" target="_blank">
                  <div class="mt-3">
                    <div>
                      <u> Адрес офиса </u>
                    </div>
                    <v-icon color="primary" size="20">mdi-map-marker</v-icon>
                    <b> ул. Стахановская, 43 </b>
                  </div>
                </a>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-navigation-drawer>
      <v-main :style="mdAndUp ? 'margin-top: 157px' : 'margin-top: 82px'">
        <v-container
          class="container"
          style="max-width: 100% !important; height: 100%; margin: 0; padding: 0 0 16px 0"
        >
          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </v-container>
      </v-main>

      <Footer />
    </v-app>
  </v-responsive>
</template>

<style>
.nav-btn {
  padding: 10px 25px;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  border-radius: 6px;
  height: 50px;
}

.nav-btn-active {
  background-color: #373737;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
