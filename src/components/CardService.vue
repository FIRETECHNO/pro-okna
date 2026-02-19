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
  <div class="img-service" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
  <MyAccentButton class="accent-button"> {{ textButton }} </MyAccentButton>
  <p class="variants-service">
    {{ variantsService }}
  </p>
</template>
<style scoped>
.accent-button {
  margin-top: 16px;
  width: 85%;
}

.img-service {
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.variants-service {
  font-weight: 700;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.58);
  text-align: center;
}

@media (max-width: 1280px) {
  .accent-button {
    font-size: 13px;
  }
}
@media (max-width: 960px) {
  .img-service {
    width: 50%;
  }
  .accent-button {
    width: 37%;
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
@media (max-width: 425px) {
  .img-service {
    height: 20vh;
  }
  .accent-button {
    padding: 8px 15px;
  }
}
</style>
