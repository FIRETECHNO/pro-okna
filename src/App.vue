<script setup lang="ts">
import MyAccentButton from './components/MyAccentButton.vue'
import ContactsFab from "./components/ContactsFab.vue"
import Footer from './components/Footer.vue';
import { ref, computed, watch } from "vue"
import { useRoute, useRouter } from 'vue-router';
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
    title: 'Продажа окон в вашем городе',
    description: 'Качественные окна по лучшей цене'
  },
  {
    name: 'Балконы',
    url: '/balcony',
    isActive: false,
    title: 'Балконы на заказ',
    description: 'Остекление и ремонт балконов'
  },
  {
    name: 'Ремонт окон',
    url: '/windows-repair',
    isActive: false,
    title: 'Ремонт окон',
    description: 'Профессиональный ремонт окон быстро и качественно'
  }
])

let navigationDrawer = ref(false)

// Активная страница
const activePage = computed(() => navBtns.value.find(btn => btn.url === route.path))

// SEO через computed
useHead(computed(() => ({
  title: activePage.value?.title || 'Pro-Okna159',
  meta: [
    { name: 'description', content: activePage.value?.description || 'Лучшие окна и балконы в вашем городе' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [
    { rel: 'canonical', href: `https://pro-okna159.ru${route.path}` } // замени на свой домен
  ]
})))

// Подсветка активной кнопки навигации
const updateActiveBtns = () => {
  navBtns.value.forEach(btn => {
    btn.isActive = (btn.url === route.path)
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
                  <v-icon color="primary" size="20">mdi-map-marker</v-icon>
                  ул. Стахановская, 43
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
              <button @click="router.push(btn.url)" class="nav-btn" :class="btn.isActive ? 'nav-btn-active' : ''">{{
                btn.name }}</button>
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
            <v-col cols="auto" style="display: flex; align-items: center; font-size: 24px;">
              <v-icon class="menu-icon" @click="navigationDrawer = !navigationDrawer">mdi-menu</v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
      <v-navigation-drawer v-if="!mdAndUp" v-model="navigationDrawer" location="right"
        :width="display.width.value ?? '300px'" style="padding-top: 102px;">
        <div class="flex flex-col justify-between" style="height: 100%;">

          <v-row class="flex justify-center">
            <v-col class="flex justify-center" cols="12" v-for="(btn, index) of navBtns">
              <button @click="router.push(btn.url)" class="nav-btn" :class="btn.isActive ? 'nav-btn-active' : ''">{{
                btn.name }}</button>
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
                <div class="mr-10">
                  <v-icon color="primary" size="20">mdi-map-marker</v-icon>
                  ул. Стахановская, 43
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-navigation-drawer>
      <v-main :style="mdAndUp ? 'margin-top: 174px' : ''">
        <v-container class="container" style="max-width: 100% !important; height: 100%; margin: 0; padding: 0 0 16px 0">
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
