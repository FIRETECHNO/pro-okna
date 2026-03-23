<script setup lang="ts">
import { ref } from 'vue'

const reviewsScroll = ref<HTMLElement | null>(null)

const AVITO_URL =
  'https://www.avito.ru/brands/i65942068?gdlkerfdnwq=101&page_from=from_item_header&iid=776800368&page_from=from_item_card&iid=776800368'

const openAvito = () => {
  window.open(AVITO_URL, '_blank')
}

const scrollReviews = (direction: 'left' | 'right') => {
  if (reviewsScroll.value) {
    const scrollAmount = 370
    reviewsScroll.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }
}

const reviews = ref([
  {
    id: 1,
    name: 'Виктория',
    text: 'Заказывали балконую часть и окно на кухню. Все сделано качественно, чисто, с душой. Работой довольны, мусор весь собрали и увезли. Очень благодарны и рекомендуем. Редко встретишь добросовестных людей.',
    rating: 5,
    date: '21.03.2026',
  },
  {
    id: 2,
    name: 'Каримова Виктория Сергеевна',
    text: 'Ремонт окна сломался механизм. Все заменили и отрегулировали. Работа была сделана качественно.',
    rating: 5,
    date: '15.12.2025',
  },
  {
    id: 3,
    name: 'Дарья',
    text: 'Работы выполнены качественно и в срок.',
    rating: 5,
    date: '11.12.2025',
  },
  {
    id: 4,
    name: 'ООО ЯЙВИНСКИЙ РЫБХОЗ',
    text: 'Устанавливали подоконник, все сделали в срок и очень быстро ребята молодцы и по цене приемлемо.',
    rating: 5,
    date: '08.12.2025',
  },
  {
    id: 5,
    name: 'Павел',
    text: 'Отделка балкона. Замер договор подписали подождали изготовление потом договорились и в день все готово. Спасибо.',
    rating: 5,
    date: '19.11.2025',
  },
  {
    id: 6,
    name: 'Елена Отинова',
    text: 'Работа выполнена в полном объеме и в срок. Ребята молодцы. Особенное спасибо Артёму и Анатолию.',
    rating: 5,
    date: '29.10.2025',
  },
  {
    id: 7,
    name: 'Запчасти Caterpillar, CTP, Komatsy, Volvo',
    text: 'Нужно было заменить стекло в 2 стеклопакетах. Исполнитель на следующий день после обращения приехал, снял замеры и сказал, когда будет готово новое стекло. Точно в срок приехал, заменил. По стоимости все, как договаривались. Спасибо за качественную работу. Рекомендую.',
    rating: 5,
    date: '19.10.2025',
  },
  {
    id: 8,
    name: 'Ирина',
    text: 'Работа выполнена качественно, советую всем.',
    rating: 5,
    date: '18.10.2025',
  },
  {
    id: 9,
    name: 'Лилия',
    text: 'Работа выполнена быстро и качественно. Работой довольна',
    rating: 5,
    date: '10.10.2025',
  },
  {
    id: 10,
    name: 'Сергей',
    text: 'Выполнили работу качественно, оперативно, рекомендую к сотрудничеству.',
    rating: 5,
    date: '03.10.2025',
  },
  {
    id: 11,
    name: 'Валерий',
    text: 'Работы выполнены на высшем уровне, ребята молодцы!!!',
    rating: 5,
    date: '21.09.2025',
  },
  {
    id: 12,
    name: 'Олеся',
    text: 'Приехали, все сделали качественно, быстро, ребята молодцы!!!',
    rating: 5,
    date: '01.09.2025',
  },
  {
    id: 13,
    name: 'Лариса',
    text: 'Заказывала остекление балкона. Замечательные специалисты. К работе приступили вовремя, приезжали без опозданий, сделали все в оговоренные сроки и по договоренной стоимости.',
    rating: 5,
    date: '28.08.2025',
  },
])
</script>

<template>
  <v-container class="reviews-container">
    <h2 class="reviews-header">отзывы клиентов</h2>
    <div class="reviews-wrapper">
      <div ref="reviewsScroll" class="reviews-scroll">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="review-card"
          @click="openAvito"
          style="cursor: pointer"
        >
          <div class="review-header">
            <div class="review-avatar">
              {{ review.name.charAt(0) }}
            </div>
            <div class="review-info">
              <h3 class="review-name">{{ review.name }}</h3>
              <p class="review-date">{{ review.date }}</p>
            </div>
          </div>
          <div class="review-rating">
            <v-icon v-for="n in 5" :key="n" color="#e52e2a" size="18"> mdi-star </v-icon>
          </div>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </div>
      <div class="reviews-nav-buttons">
        <button class="reviews-nav-btn" @click="scrollReviews('left')">
          <v-icon size="24">mdi-chevron-left</v-icon>
        </button>
        <button class="reviews-nav-btn" @click="scrollReviews('right')">
          <v-icon size="24">mdi-chevron-right</v-icon>
        </button>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.reviews-container {
  padding: 60px 16px;
  max-width: 1400px !important;
}

.reviews-header {
  font-size: 28px;
  font-family: 'Montserrat Variable';
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  color: #212121;
}

.reviews-scroll {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 0 12px;
  scroll-behavior: smooth;
}

.reviews-scroll {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  padding: 0 12px 12px 12px;
  scroll-behavior: smooth;
}

.reviews-scroll::-webkit-scrollbar {
  height: 8px;
}

.reviews-scroll::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 12px;
}

.reviews-scroll::-webkit-scrollbar-thumb {
  background: #e52e2a;
  border-radius: 4px;
}

.reviews-nav-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-right: 12px;
  position: relative;
  z-index: 10;
}

.review-card {
  flex: 0 0 350px;
  background: #f5f5f5;
  border-radius: 16px;
  padding: 24px;
  width: 350px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.review-col {
  flex: 0 0 350px;
  padding: 12px;
  display: flex;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.review-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e52e2a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Montserrat Variable';
  margin-right: 12px;
}

.review-info {
  flex: 1;
}

.review-name {
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat Variable';
  color: #212121;
  margin: 0;
}

.review-date {
  font-size: 12px;
  font-family: 'Montserrat Variable';
  color: #757575;
  margin: 4px 0 0 0;
}

.review-rating {
  display: flex;
  gap: 2px;
  margin-bottom: 12px;
}

.review-text {
  font-size: 14px;
  font-family: 'Montserrat Variable';
  line-height: 1.6;
  color: #424242;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.reviews-wrapper {
  position: relative;
}

.reviews-nav-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  padding-right: 12px;
}

.reviews-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem);
  height: clamp(2.5rem, 1.5057rem + 2.8409vw, 3.75rem);
  background: rgba(217, 217, 217, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: black;
  transition: background 0.3s ease;
}

.reviews-nav-btn:hover {
  background: rgba(229, 46, 42, 0.8);
  color: white;
}

@media (max-width: 768px) {
  .reviews-header {
    font-size: 20px;
    margin-bottom: 24px;
  }

  .review-card {
    padding: 16px;
  }

  .review-avatar {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .review-name {
    font-size: 14px;
  }

  .review-text {
    font-size: 13px;
  }
}
</style>
