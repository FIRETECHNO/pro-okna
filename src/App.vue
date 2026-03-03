<script setup lang="ts">
import MyAccentButton from './components/MyAccentButton.vue'
import { ref, watch } from "vue"
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

let navBtns = ref([
  { name: 'Окна', url: '/', isActive: false, },
  { name: 'Балконы', url: '/balcony', isActive: false, },
  { name: 'Натяжные потолки', url: '/', isActive: false, },
  { name: 'Ремонт окон', url: '/windows-repair', isActive: false, }
])

watch(
  () => route.path,
  (newPath) => {
    navBtns.value.forEach(btn => {
      btn.isActive = (btn.url === newPath)
    })
  },
  { immediate: true }   // ← важно! чтобы сработало при монтировании
)
</script>

<template>
  <v-responsive>
    <v-app>
      <v-app-bar flat height="prominent">
        <v-container>
          <v-row class="flex justify-between">
            <v-col class="flex justify-start" cols="auto">
              <img src="/icons/logo-old-variant.png" style="height: 70px" :draggable="false" />
              <div class="flex flex-col justify-center">
                <a href="tel:+7(950)473-91-17" class="underline"> Заказать звонок </a>
                <a href="tel:+7(950)473-91-17" class="font-bold no-underline">
                  <v-icon size="20">mdi-phone</v-icon>
                  +7 (950) 473-91-17
                </a>
              </div>
            </v-col>
            <v-col class="flex flex-row items-center justify-end" cols="auto">
              <div class="mr-10">
                <v-icon color="primary" size="20">mdi-map-marker</v-icon>
                ул. Стахановская, 43
              </div>

              <MyAccentButton>Вызвать мастера на замер</MyAccentButton>
            </v-col>
            <v-divider></v-divider>
          </v-row>

          <v-row class="flex flex-between" style="display: flex; justify-content: space-between;">
            <v-col cols="auto" class="flex justify-center" v-for="(btn, index) of navBtns">
              <button @click="router.push(btn.url)" class="nav-btn" :class="btn.isActive ? 'nav-btn-active' : ''">{{
                btn.name }}</button>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <v-main style="margin-top: 174px">
        <v-container class="container" style="max-width: 100% !important; height: 100%; margin: 0; padding: 0 0 16px 0">
          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </v-container>
      </v-main>
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
