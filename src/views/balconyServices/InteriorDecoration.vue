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
          <h1>Внутренняя отделка балконов и лоджии</h1>
          <h2>Превращаем балкон в уютное помещение</h2>
          <p>
            Внутренняя отделка балконов и лоджий — превращаем техническое помещение в полноценную
            комнату. Работаем с любыми типами помещений: утепленными и холодными, после остекления
            или без него. Предлагаем различные варианты отделки: деревянная вагонка для уюта и
            натуральности, практичные и влагостойкие ПВХ-панели, гипсокартон с покраской или обоями
            для создания жилого пространства, а также декоративная штукатурка и камень для
            премиальных решений. Выполняем полный комплекс работ: утепление стен и пола, черновая
            подготовка, финишная отделка, установка освещения и розеток. Используем материалы,
            устойчивые к перепадам температур и влажности. Бесплатный выезд замерщика для
            консультации и сметы.
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
