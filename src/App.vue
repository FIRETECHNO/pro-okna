<script setup lang="ts">
import MyButton from './components/MyButton.vue';

</script>

<template>
  <v-responsive>
    <v-app>
      <v-app-bar flat height="prominent">
        <v-container>
          <v-row class="flex justify-between">
            <v-col class="flex justify-start" cols="auto">
              <img src="/icons/logo-old-variant.png" style="height: 70px;" :draggable="false" />
              <div class="flex flex-col justify-center">
                <a href="tel:+7(950)473-91-17" class="underline">
                  Заказать звонок
                </a>
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

              <MyButton>Вызвать мастера на замер</MyButton>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="flex flex-between">
            <v-col cols="3" class="flex justify-center">
              Окна
            </v-col>
            <v-col cols="3" class="flex justify-center">Балконы</v-col>
            <v-col cols="3" class="flex justify-center">Натяжные потолки</v-col>
            <v-col cols="3" class="flex justify-center">Ремонт окон</v-col>
          </v-row>
        </v-container>


      </v-app-bar>

      <v-main style="margin-top: 127px;">
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style scoped></style>
