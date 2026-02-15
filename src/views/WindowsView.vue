<script setup lang="ts">
import BlockImage from '@/components/BlockImage.vue';
import imageUrl from '@/assets/images/ViewsBlockImage.jpg'
</script>
<template>
  <BlockImage :image-url="imageUrl">
    <template #mainText>
      скидки на окна до 
    </template>
    <template #discount>
      <p style="color: #E52E2A;">-40%</p>
    </template>
  </BlockImage>
</template>