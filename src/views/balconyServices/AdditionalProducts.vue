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
          <h1>Сопутствующие товары</h1>
          <h2 class="subtitle">Все необходимое для комфорта</h2>

          <div class="image-text-row">
            <div class="image-col">
              <img src="/images/balcony/services/AdditionalProducts.png" alt="Шкафы для балкона"
                class="content-image" />
            </div>
            <div class="text-col">
              <h3>Шкафы</h3>
              <p>
                Шкафы для балконов и лоджий — идеальное решение для хранения вещей и организации
                пространства. Изготавливаем из влагостойких материалов, устойчивых к перепадам
                температуры.
              </p>
              <p><b>Преимущества:</b></p>
              <p>• Влагостойкие материалы — не деформируются от влаги</p>
              <p>• Индивидуальные размеры — под любой балкон</p>
              <p>• Разнообразие дизайнов — встроенные, корпусные, угловые</p>
              <p>• Долговечность — срок службы более 15 лет</p>
              <p>• Бесплатный замер и консультация</p>
            </div>
          </div>

          <div class="divider"></div>

          <div class="image-text-row reverse">
            <div class="image-col">
              <img src="/images/balcony/services/AdditionalProducts.png" alt="Сушилки для белья"
                class="content-image" />
            </div>
            <div class="text-col">
              <h3>Сушилки для белья</h3>
              <p>
                Сушилки для белья на балкон — практичное решение для сушки одежды без ущерба для
                интерьера квартиры. Предлагаем напольные, потолочные и настенные модели.
              </p>
              <p><b>Виды сушилок:</b></p>
              <p>• Потолочные — компактные, выдерживают до 20 кг</p>
              <p>• Напольные — мобильные, легко складываются</p>
              <p>• Настенные — стационарные, экономят пространство</p>
              <p>• Раздвижные — универсальное решение для любого балкона</p>
              <p><b>Материал:</b> алюминий, сталь с антикоррозийным покрытием</p>
            </div>
          </div>

          <p class="highlight">
            Все товары в наличии. Бесплатный выезд замерщика. Доставка и установка под ключ.
          </p>
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
  display: flex;
  gap: 40px;
  align-items: center;
  margin-top: 30px;
}

.image-text-row.reverse {
  flex-direction: row-reverse;
}

.image-col {
  flex: 0 0 400px;
}

.image-col img {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
}

.text-col {
  flex: 1;
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

h3 {
  font-size: clamp(1.25rem, 0.7rem + 1.5vw, 1.75rem);
  font-weight: 700;
  margin-bottom: 16px;
  color: #333;
}

p {
  font-size: clamp(1rem, 0.7rem + 1vw, 1.15rem);
  line-height: 1.6;
  margin-bottom: 8px;
}

.divider {
  height: 2px;
  background: #e0e0e0;
  margin: 40px 0;
}

.highlight {
  color: #e52e2a;
  font-weight: 500;
  margin-top: 24px;
  font-size: clamp(1.1rem, 0.8rem + 1vw, 1.25rem);
}
</style>
