<script setup lang="ts">
import { computed } from "vue"
import { useDisplay } from 'vuetify';

const display = useDisplay()
let mdAndUp = computed(() => display.mdAndUp)
</script>
<template>
  <v-footer>
    <v-container>
      <v-row v-if="!mdAndUp.value">
        <v-col cols="6" class="d-flex justify-start">
          Часы работы офиса <br>
          ПН-ПТ с 9:00 до 17:00 <br>
          СБ-ВС выходной
        </v-col>
        <v-col cols="6" class="d-flex flex-col justify-end align-end">
          <div>

            Всегда на связи <br> с 8:00 до 20:00 <br> без выходных
            <div class="mt-4">
              <div>
                <a href="tel:+7(950)473-91-17"><u>+7 (950) 473-91-17</u></a>
              </div>
              <div>
                <a href="tel:+7(950)473-91-17"><u>позвонить</u></a>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-space-between">
        <v-col cols="6" md="3">
          <a href="/">
            <img src="/icons/logo-old-variant.png" style="height: 50px" :draggable="false" />
          </a>
        </v-col>
        <v-col v-if="mdAndUp.value" cols="3" class="d-flex justify-start">
          Часы работы офиса <br>
          ПН-ПТ с 9:00 до 17:00 <br>
          СБ-ВС выходной
        </v-col>
        <v-col v-if="mdAndUp.value" cols="3" class="d-flex flex-col flex-md-row justify-end align-end">
          Всегда на связи <br> с 8:00 до 20:00 <br> без выходных
          <div class="ml-0 ml-md-4">
            <div>
              <a href="tel:+7(950)473-91-17"><u>+7 (950) 473-91-17</u></a>
            </div>
            <div>
              <a href="tel:+7(950)473-91-17"><u>позвонить</u></a>
            </div>
          </div>
        </v-col>
        <v-col cols="6" md="3" style="font-weight: 400 !important;" class="d-flex justify-end">2004-{{ new
          Date().getFullYear()
          }} © Про
          окна</v-col>
      </v-row>

      <!-- <v-row class="flex justify-between">
        <v-col cols="12" sm="6" md="6">
          <v-row class="flex justify-between">
            <v-col cols="auto" class="flex  align-start">
              <a href="/">
                <img src="/icons/logo-old-variant.png" style="height: 50px" :draggable="false" />
              </a>
            </v-col>
            <v-col cols="auto" class="flex">
              Часы работы офиса <br>
              ПН-ПТ с 9:00 до 17:00 <br>
              СБ-ВС выходной
            </v-col>
            <v-col cols="auto" class="flex">
              Всегда на связи <br> с 8:00 до 20:00 <br> без выходных
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="6">
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
      </v-row> -->
    </v-container>
  </v-footer>
</template>