<script setup lang="ts">
const props = defineProps<{
  icon: string
  name: string
  text: string
}>()

let { icon, name, text } = props
</script>

<template>
  <v-container class="container-advantage">
    <v-icon class="advantage-icon" color="primary" size="40">{{ icon }}</v-icon>
    <div class="container-advantage-info">
      <h1 class="advantage-name">{{ name }}</h1>
      <p class="advantage-text">{{ text }}</p>
    </div>
  </v-container>
</template>
<style scoped>
.container-advantage {
  display: flex;
  flex-direction: row;
}
.advantage-icon {
  border-radius: 50px;
  border: solid #e52e2a;
  padding: 23px;
}
.container-advantage-info {
  padding-top: 5px;
  padding-left: 5px;
  overflow-wrap: break-word;
}
.advantage-name {
  font-size: 24px;
  font-weight: 600;
  font-family: 'Montserrat Variable';
  line-height: 100%;
}
.advantage-text {
  font-size: 16px;
  font-weight: 400;
  padding-top: 10px;
  font-family: 'Montserrat Variable';
}
@media (min-width: 1080px) {
  .container-advantage {
    text-align: center;
  }
}
@media (min-width: 768px) and (max-width: 1100px) {
  .container-advantage-info {
    padding-left: 3px;
  }
  .advantage-name {
    font-size: 15px;
  }
  .advantage-text {
    font-size: 13px;
  }
  .container-advantage {
    padding-top: 0px;
  }
}
@media (max-width: 767px) {
  .container-advantage {
    padding-top: 0px;
  }
}
</style>
