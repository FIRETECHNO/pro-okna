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

          <v-row class="image-text-row">
            <v-col cols="12" md="6" class="text-col-right">
              <h1>Отделка балкона ПВХ-панелями</h1>
              <p>
                Популярный способ внутренней отделки благодаря простоте монтажа, разнообразию дизайнов
                и практичности. Этот материал подходит для застеклённых балконов.
              </p>
              <p><b>Выбор панелей:</b></p>
              <p>• Тип соединения: шовные (шип-паз) или бесшовные</p>
              <p>• Текстура: гладкие неприхотливы в уходе</p>
              <p>• Толщина: оптимальная от 8 мм</p>
              <p>• Цвет: светлые расширяют пространство, можно с имитацией дерева, камня, кирпича</p>
            </v-col>
            <v-col cols="12" md="6" class="image-col-left">
              <img src="/images/balcony/services/PVCPanels.jpg" alt="ПВХ-панели для балкона" class="content-image" />
            </v-col>
          </v-row>

          <v-row class="image-text-row">
            <v-col cols="12" md="6" class="image-col">
              <img src="/images/balcony/services/WoodClapboard.webp" alt="Деревянная вагонка" class="content-image" />
            </v-col>
            <v-col cols="12" md="6" class="text-col">
              <h1>Деревянная вагонка</h1>
              <p>
                Подходит для отделки балкона. Обладает хорошими теплоизоляционными свойствами,
                выглядит эстетично. Особенности: склонна к деформации при перепадах температуры и
                влажности.
              </p>
              <p><b>Выбор материала:</b></p>
              <p>• Хвойные: сосна, ель, кедр, лиственница</p>
              <p>• Лиственные: липа, осина, дуб, ясень</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row id="order-form" style="margin-top: 50px" class="d-flex justify-center">
        <v-col cols="12" md="10" lg="8">
          <SignUpConsultation />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.first-section-image {
  height: 40vh;
  width: 100vw;
  background-size: cover;
}

.image-text-row {
  margin-top: 20px;
}

.image-col {
  display: flex;
  align-items: center;
}

.content-image {
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

h1 {
  font-size: clamp(1.25rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h2 {
  font-size: clamp(1.25rem, 0.7528rem + 1.4205vw, 1.875rem);
}

.note {
  background: #f5f5f5;
  border-left: 4px solid #e52e2a;
  padding: 16px 20px;
  margin: 24px 0;
  font-style: italic;
  color: #555;
  font-size: clamp(1rem, 0.7rem + 1vw, 1.25rem);
}

p {
  font-size: clamp(1rem, 0.7rem + 1vw, 1.25rem);
  line-height: 1.6;
}
</style>
