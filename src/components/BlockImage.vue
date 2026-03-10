<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
}>()

let imageUrl = props.imageUrl
</script>
<template>
  <v-container class="container-block-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <v-row style="height: 100%; margin: 0">
      <v-col cols="12" md="8" class="textBlock">
        <div>
          <slot name="mainText"></slot>
          <slot name="discount"></slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
img {
  margin: 0;
  padding: 0;
}

.container-block-image {
  max-width: 100% !important;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.textBlock {
  color: white;
  /* font-size: clamp(1.875rem, -0.6108rem + 7.1023vw, 5rem); */
  font-size: clamp(2.5rem, 0.5114rem + 5.6818vw, 5rem);
  line-height: 1.05;
  /* font-size: 80px;
  line-height: 90px; */
  font-family: 'Montserrat Variable', sans-serif;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  padding: 0px 100px 30px 60px;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  /* clip-path: polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%); */
}

@media (max-width: 1125px) {
  .textBlock {
    /* font-size: 60px; */
  }
}

@media (max-width: 880px) {
  .textBlock {
    /* font-size: 46px;
    line-height: 50px; */
    clip-path: none;
  }
}

@media (max-width: 768px) {
  .textBlock {
    background: none;
    clip-path: none;
  }
}
</style>
