<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import MyAccentButton from './MyAccentButton.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps<{
  urlImages: string[]
}>()

const emits = defineEmits(['scroll-to-form'])

const imageList = props.urlImages
</script>
<template>
  <v-container style="max-width: 100% !important; padding: 0px; margin-top: 100px" class="our-products-container">
    <p class="text-our-products">Наши работы</p>

    <Swiper style="width: 100%" :modules="[Navigation]" :slides-per-view="1" :space-between="20" :centered-slides="true"
      :loop="true" :breakpoints="{
        960: { slidesPerView: 3 },
        600: { slidesPerView: 2 },
      }" navigation>
      <SwiperSlide v-for="image in imageList">
        <img :src="image" class="img-slide" alt="" />
      </SwiperSlide>
    </Swiper>
    <div class="button-our-products">
      <a :href="route.path + '#order-form'">
        <MyAccentButton style="width: 20%; min-width: 180px">Хочу так же! </MyAccentButton>
      </a>
    </div>
  </v-container>
</template>
<style scoped>
.text-our-products {
  font-family: 'Montserrat Variable';
  font-weight: 600;
  font-size: 27px;
  margin-left: 40px;
  margin-bottom: 20px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-content: center;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  color: black;
  /* делаем стрелки синими */
  width: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem) !important;
  /* 40 -> 60*/
  height: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem) !important;
  padding: 10px 5px 10px 5px;
  background: rgba(217, 217, 217, 0.7);
  border-radius: 50%;
}

:deep(.swiper-button-prev) {
  padding-right: 10px;
}

:deep(.swiper-button-next) {
  padding-left: 10px;
}

.img-slide {
  width: 90%;
  height: 40vh;
  background-position: center;
  user-select: none;
  object-fit: contain;
}

.button-our-products {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

@media (max-width: 1080px) {
  .img-slide {
    height: 35vh;
  }
}

@media (max-width: 960px) {
  .img-slide {
    height: 35vh;
  }
}

@media (max-width: 768px) {
  .img-slide {
    height: 30vh;
  }
}

@media (max-width: 580px) {
  .img-slide {
    height: 25vh;
  }
}
</style>
