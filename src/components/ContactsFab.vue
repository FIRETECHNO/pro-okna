<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/src/assets/images/phone-icon.svg',
  '/src/assets/images/telegram-icon.svg'
]

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
  timer = setInterval(rotate, 5500) // полный цикл ≈ 5.5 сек (5 сек показа + 0.5 сек переход)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="floating-contact">
    <a :href="currentIndex === 0 ? 'tel:+78001234567' : 'https://t.me/stekloservis59'" target="_blank"
      rel="noopener noreferrer" class="icon-link" :class="{ fading: isFading }"
      :style="{ backgroundImage: `url(${images[currentIndex]})` }" aria-label="Связаться с нами"></a>
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