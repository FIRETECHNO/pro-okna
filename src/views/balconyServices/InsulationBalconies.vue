<script setup lang="ts">
import FormWindowsView from '@/components/Form/FormWindowsView.vue'
import BackButton from '@/components/BackButton.vue'
</script>
<template>
  <div>
    <BackButton />

    <div
      class="first-section-image"
      :style="{ backgroundImage: `url(${'/images/balcony/BalconyBlockImage.png'})` }"
    ></div>

    <v-container
      style="
        margin: clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0
          clamp(3.75rem, 1.7614rem + 5.6818vw, 6.25rem) 0;
      "
    >
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <h1>Утепление балконов</h1>
          <h2>Делаем холодный балкон теплым и пригодным для жизни</h2>
          <p>
            Утепление балконов — создаем комфортную температуру круглый год. Даже после
            качественного остекления без правильного утепления балкон остается холодным. Мы решаем
            эту задачу комплексно. Выполняем полноценную теплоизоляцию всех поверхностей: стен, пола
            и потолка. Используем современные материалы — пеноплекс, минеральную вату, пенофол,
            которые не боятся влаги и перепадов температур. Обязательно делаем гидро- и
            пароизоляцию, чтобы не появлялся конденсат и плесень. После утепления ваш балкон можно
            использовать как кабинет, зону отдыха, гардеробную или просто дополнительную комнату.
            При необходимости монтируем систему теплый пол и электрику. Бесплатный выезд замерщика
            для консультации и расчета материалов
          </p>
        </v-col>
      </v-row>
    </v-container>

    <FormWindowsView />
  </div>
</template>
<style scoped>
.first-section-image {
  height: 40vh;
  width: 100vw;
  background-size: cover;
}

h1 {
  font-size: clamp(1.25rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h2 {
  font-size: clamp(1.25rem, 0.7528rem + 1.4205vw, 1.875rem);
}

p {
  font-size: clamp(1.125rem, 0.8267rem + 0.8523vw, 1.5rem);
  margin-top: 30px;
  font-weight: 300;
}
</style>
