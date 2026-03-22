<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import BackButton from '@/components/BackButton.vue'
</script>
<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <BackButton />
          <h1>Остекление веранды, беседки, террасы</h1>
          <h2 class="subtitle">Комфортный отдых на свежем воздухе в любую погоду</h2>
          <v-row class="image-text-row">
            <v-col cols="12" xl="5" class="image-col">
              <img src="/images/views/services/Glazing2.jpg" alt="Остекление веранды" class="content-image" />
            </v-col>
            <v-col cols="12" md="" xl="7">
              <p>
                Остекление веранд, беседок и террас под ключ — делаем открытые пространства
                комфортными в любую погоду.
              </p>
              <p><b>Холодное остекление</b> — алюминиевый профиль для защиты от ветра и дождя.</p>
              <p>
                <b>Тёплое остекление</b> — с энергосберегающими стеклопакетами для круглогодичного
                использования.
              </p>
              <p>
                Устанавливаем раздвижные и распашные системы — экономим место и сохраняем панорамный
                обзор.
              </p>
              <p>Возможно тонирование и ламинация в любой цвет. Монтаж с гарантией.</p>
              <p class="highlight">Бесплатный выезд замерщика для подбора оптимального варианта.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-row id="order-form" style="margin-top: 50px" class="d-flex justify-center">
      <v-col cols="12" md="10" lg="8">
        <SignUpConsultation />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.image-text-row {
  margin-top: 30px;
}

.image-col img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

h1 {
  font-size: clamp(1.25rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h2.subtitle {
  font-size: clamp(1.1rem, 0.7rem + 1vw, 1.4rem);
  font-weight: 400;
  margin-bottom: 20px;
  color: #555;
}

p {
  font-size: clamp(1rem, 0.7rem + 1vw, 1.15rem);
  line-height: 1.6;
  margin-bottom: 12px;
}

p.highlight {
  color: #e52e2a;
  font-weight: 500;
}
</style>
