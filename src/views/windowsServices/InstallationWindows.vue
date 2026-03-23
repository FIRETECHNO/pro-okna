<script setup lang="ts">
import SignUpConsultation from '@/components/SignUpConsultation.vue'
import BackButton from '@/components/BackButton.vue'

const steps = [
  {
    number: 1,
    title: 'Замер проёмов',
    description:
      'Специалист приезжает на объект, фиксирует точные размеры, оценивает состояние проёмов и консультирует заказчика по выбору материалов, комплектации и опций.',
  },
  {
    number: 2,
    title: 'Проектирование',
    description:
      'Создаётся индивидуальный чертёж с учётом геометрии проёма, климатических условий, требований к энергоэффективности, шумоизоляции и других параметров.',
  },
  {
    number: 3,
    title: 'Изготовление конструкции',
    description:
      'Производится ПВХ-профиль, стеклопакеты, подбирается фурнитура (ручки, петли, запорные механизмы, уплотнители).',
  },
  {
    number: 4,
    title: 'Доставка',
    description:
      'Готовые окна доставляют на объект. Иногда в стоимость входит подъём материалов, но это зависит от политики компании и условий договора.',
  },
  {
    number: 5,
    title: 'Демонтаж старых окон',
    description:
      'Рабочие аккуратно снимают старую раму, очищают проём от остатков пены, штукатурки и мусора.',
  },
  {
    number: 6,
    title: 'Монтаж новой конструкции',
    description:
      'Устанавливается рама, регулируется уровень, фиксируется распорными клиньями. Затем монтируются створки, стеклопакеты, отливы.',
  },
  // {
  //   number: 7,
  //   title: 'Герметизация швов',
  //   description:
  //     'Выполняется трёхслойный шов по ГОСТ: пароизоляция изнутри, теплоизоляция монтажной пеной, гидроизоляция снаружи (лента, ПСУЛ или герметик).',
  // },
  {
    number: 7,
    title: 'Установка подоконника и откосов',
    description:
      'Подоконник монтируется с небольшим уклоном внутрь для отвода конденсата. Откосы (часто из сэндвич-панелей) улучшают тепло- и звукоизоляцию, защищают монтажную пену от внешних воздействий.',
  },
  {
    number: 8,
    title: 'Регулировка фурнитуры',
    description: 'Настраивается механизм открывания/закрывания створок.',
  },
  {
    number: 9,
    title: 'Уборка и вывоз мусора',
    description:
      'Помещение приводится в порядок, старые окна и строительный мусор вывозятся (иногда эта услуга оплачивается отдельно).',
  },
]
</script>
<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <BackButton />
        </v-col>

        <v-col cols="12" sm="11" md="" lg="10" xl="9">
          <h1>Окна с монтажом</h1>
          <p class="intro-text">
            Это конструкции, которые устанавливаются в проём с соблюдением технологии монтажа,
            которая включает установку оконного блока, фиксацию, герметизацию швов и установку
            элементов конструкции.
          </p>
          <h2 class="mt-8 mb-6">Грамотная установка решает несколько задач:</h2>
          <div class="benefits-layout">
            <div class="benefits-image">
              <img src="/images/views/services/InstallationWindows2.webp" alt="Монтаж окон" />
            </div>
            <div class="benefits-cards">
              <div class="benefit-card">
                <div class="benefit-icon">🔥</div>
                <p>Сохраняет тепло внутри помещения</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">💧</div>
                <p>Предотвращает образование конденсата</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">🛡️</div>
                <p>Защищает монтажный шов от разрушения</p>
              </div>
              <div class="benefit-card">
                <div class="benefit-icon">⚙️</div>
                <p>Обеспечивает правильную работу</p>
              </div>
            </div>
          </div>
          <h2 class="mb-6">Что входит в услугу</h2>
          <div class="relative pl-8">
            <div class="absolute left-0 top-0 bottom-0 current-bg" style="width: 3px"></div>
            <div v-for="(step, index) in steps" :key="index" class="mb-12 relative">
              <div style="
                  width: 12px;
                  height: 12px;
                  border-radius: 999px;
                  left: calc(-32px - 4px);
                  top: calc(50% - 16px);
                " class="absolute current-bg"></div>
              <h3 class="text-lg md:text-xl font-bold">{{ step.number }}. {{ step.title }}</h3>
              <p class="text-lg">{{ step.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="10" lg="8">
        <SignUpConsultation>Записаться на бесплатный замер</SignUpConsultation>
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.current-bg {
  background-color: red;
}

h1 {
  font-size: clamp(1.25rem, 0.2557rem + 2.8409vw, 2.5rem);
  font-weight: 800;
}

h2 {
  font-size: clamp(1.25rem, 0.7528rem + 1.4205vw, 1.875rem);
}

h3 {
  font-size: clamp(1.25rem, 1.0511rem + 0.5682vw, 1.5rem);
}

.intro-text {
  font-size: clamp(1rem, 0.7513rem + 0.7102vw, 1.25rem);
  font-weight: 300;
}

.benefits-layout {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.benefits-image {
  flex-shrink: 0;
  width: 300px;
}

.benefits-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.benefits-cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 12px;
  border-left: 4px solid red;
}

.benefit-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.benefit-card p {
  margin: 0;
  font-size: clamp(0.95rem, 0.7513rem + 0.5682vw, 1.1rem);
  font-weight: 400;
}

p {
  font-size: clamp(1rem, 0.7513rem + 0.7102vw, 1.25rem);
  font-weight: 300;
}

@media (max-width: 768px) {
  .benefits-layout {
    flex-direction: column;
  }

  .benefits-image {
    width: 100%;
  }

  .benefits-image img {
    height: 250px;
  }
}
</style>
