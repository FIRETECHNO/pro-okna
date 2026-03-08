<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
  <div class="container">
    <span @click="router.back()" style="cursor: pointer; padding: 12px 20px 12px 20px;">
      <v-icon>mdi-arrow-left</v-icon>&nbsp;Назад
    </span>
  </div>
</template>
<style scoped>
.container {
  font-weight: 600;
  display: flex;
  align-items: center;
  line-height: 1
}
</style>