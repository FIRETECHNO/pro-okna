<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = ['icons/phone-icon.svg', 'icons/telegram-icon.svg', 'icons/avito-icon.svg']

const getHref = (index: number) => {
  switch (index) {
    case 0:
      return 'tel:+7(950)473-91-17'
    case 1:
      return 'https://t.me/stekloservis59'
    case 2:
      return 'https://www.avito.ru/user/9fa439666d9087470efa0e5359f55f1b/profile?src=sharing'
    default:
      return '#'
  }
}

const currentIndex = ref(0)
const isFading = ref(false)

let timer: number | null = null

const rotate = () => {
  isFading.value = true

  // даём время на fade-out
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
    isFading.value = false
  }, 600) // должно совпадать с transition-duration в CSS
}

onMounted(() => {
  timer = setInterval(rotate, 2600)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="floating-contact">
    <a
      :href="getHref(currentIndex)"
      target="_blank"
      rel="noopener noreferrer"
      class="icon-link"
      :class="{ fading: isFading }"
      :style="{ backgroundImage: `url(${images[currentIndex]})` }"
      aria-label="Связаться с нами"
    ></a>
  </div>
</template>

<style scoped>
.floating-contact {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.icon-link {
  display: block;
  width: 64px;
  height: 64px;
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transition: all 0.6s ease;
  /* плавность смены */
  opacity: 1;
  transform: scale(1);
}

.icon-link:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
  background-color: #f0f0f0;
}

.icon-link.fading {
  opacity: 0;
  transform: scale(0.92);
}
</style>
