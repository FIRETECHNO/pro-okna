<script setup lang="ts"></script>
<template>
  <v-footer>
    <v-container>
      <v-row class="flex justify-between">
        <v-col cols="12" md="4">
          <v-row class="flex justify-between">
            <v-col cols="auto" class="flex  align-start">
              <a href="/">
                <img src="/icons/logo-old-variant.png" style="height: 50px" :draggable="false" />
              </a>
            </v-col>
            <v-col cols="auto" class="flex ">
              ПН-ПТ с 9:00 до 17:00 <br>
              Ежедневно на связи<br> с 8:00 до 20:00
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="8">
          <v-row class="flex justify-between" style="height: 100%;">
            <v-col cols="auto" class="flex flex-col">
              <div>
                <a href="tel:+7(950)473-91-17"><u>+7 (950) 473-91-17</u></a>
              </div>
              <div>
                <a href="tel:+7(950)473-91-17"><u>позвонить</u></a>
              </div>
            </v-col>
            <v-col cols="auto" style="font-weight: 400 !important;">2004-{{ new Date().getFullYear() }} © Про
              окна</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>