<script setup lang="ts">
import MyAccentButton from './MyAccentButton.vue'

const props = defineProps<{
  imageUrl: string
  textButton: string
  variantsService: string
}>()

let { imageUrl, textButton, variantsService } = props
</script>
<template>
  <v-container class="container-block-services">
    <img style="width: 100%; height: 30vh" :src="imageUrl" alt="Ошибка загрузки изображения" />
    <MyAccentButton class="accent-button"> {{ textButton }} </MyAccentButton>
    <p class="variants-service">
      {{ variantsService }}
    </p>
  </v-container>
</template>
<style scoped>
.container-block-services {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
}
.accent-button {
  margin-top: 16px;
  width: 85%;
}

.variants-service {
  font-weight: 700;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.58);
  text-align: center;
}

@media (max-width: 1280px) {
  .accent-button {
    font-size: 15px;
  }
}
@media (max-width: 768px) {
  .accent-button {
    font-size: 12px;
  }
  .variants-service {
    font-size: 10px;
    color: black;
  }
}
</style>
