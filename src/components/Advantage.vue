<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

let isMdAndUp = computed(() => mdAndUp.value)
const props = defineProps<{
  icon: string
  name: string
  text: string
}>()

let { icon, name, text } = props
</script>

<template>
  <v-container class="container-advantage">
    <v-icon class="advantage-icon" color="primary" :size="isMdAndUp ? 40 : 30">{{ icon }}</v-icon>
    <div class="container-advantage-info">
      <h1 class="advantage-name">{{ name }}</h1>
      <p class="advantage-text">{{ text }}</p>
    </div>
  </v-container>
</template>
<style scoped>
.container-advantage {
  display: flex;
  justify-content: center;
}

.advantage-icon {
  border-radius: 100px;
  border: solid #e52e2a 2px;
  padding: 23px;
  margin-right: 10px;
}

.container-advantage-info {
  padding-top: 5px;
  padding-left: 15px;
  overflow-wrap: break-word;
}

.advantage-name {
  font-size: 22px;
  font-weight: 600;
  font-family: 'Montserrat Variable';
  line-height: 100%;
}

.advantage-text {
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
  font-family: 'Montserrat Variable';
}

@media (max-width: 768px) {
  .container-advantage {
    justify-content: start;
  }
}

@media (min-width: 768px) and (max-width: 1100px) {
  .container-advantage-info {
    padding-left: 3px;
  }

  .advantage-name {
    font-size: 16px;
  }

  .advantage-text {
    font-size: 12px;
  }

  .container-advantage {
    padding-top: 0px;
  }
}

@media (max-width: 767px) {
  .container-advantage {
    padding-top: 0px;
  }

  .advantage-name {
    font-size: 14px;
  }

  .advantage-text {
    font-size: 12px;
  }

  .advantage-icon {
    padding: 18px;
  }
}
</style>
