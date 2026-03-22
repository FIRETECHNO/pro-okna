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
          <h1>Теплое остекление</h1>
          <p>
            <u>Теплое остекление балконов и лоджий</u> предотвращает потери тепла и позволяет
            организовать на лоджии отдельный кабинет или уголок для полноценного отдыха. Делают
            остекление для балконных зон также, как окна для квартир: из многокамерного профиля с
            двойными стеклопакетами. Уровень энергоэффективности конструкции при желании можно
            увеличить.
          </p>
          <v-row class="image-text-row">
            <v-col cols="12" xl="5" class="image-col">
              <img src="/images/balcony/services/GlazingBalconies.png" alt="Тёплое остекление балкона"
                class="content-image" />
            </v-col>
            <v-col cols="12" md="" xl="7">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="text-col">
                    <b>Преимущества ПВХ-профиля:</b>
                    <p>• Одинаково комфортный микроклимат зимой и летом</p>
                    <p>• Стильный и презентабельный вид, уместный на фасаде любого дома</p>
                    <p>
                      • Система микропроветривания, настройка фурнитуры под разные сезоны для
                      оптимизации расходов на обогрев
                    </p>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <div class="text-col">
                    <p>
                      <b>Варианты открывания:</b> распашной, откидной, поворотно-откидной, раздвижной.
                    </p>
                    <p>Любой вариант дизайна, возможность покрасить профиль в любой цвет по RAL.</p>
                    <p>
                      <b>Особенности:</b> значительный вес ПВХ-блоков требует усиления парапета. При
                      присоединении к квартире необходимо разрешение БТИ.
                    </p>
                    <p>Стоимость выше, чем для изделий из алюминиевого профиля.</p>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <blockquote class="note">
            Монтаж часто требует предварительной подготовки балкона. Необходимо выполнить внутреннюю
            отделку, укрепить парапет (приварить усиливающие металлоконструкции). Эти работы
            вспомогательные и не входят в стоимость базового комплекта остекления. Смету на них
            следует учесть при планировании бюджета на остекление.
          </blockquote>

          <p class="quote">
            Расходы на теплые оконные системы оправданы: вы получаете долговечное и практичное
            остекление, которое прослужит дольше, чем алюминиевый профиль.
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
