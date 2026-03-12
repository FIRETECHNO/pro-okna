<script setup lang="ts">
import { ref } from 'vue'

const reviews = ref([
  {
    id: 1,
    name: 'Александр Иванов',
    text: 'Заказывал пластиковые окна в квартиру. Очень доволен качеством работы и скоростью монтажа. Ребята всё сделали аккуратно, убрали за собой мусор. Рекомендую!',
    rating: 5,
    date: '15.02.2026',
  },
  {
    id: 2,
    name: 'Елена Петрова',
    text: 'Остекляли балкон. Сначала сомневались, но менеджер всё подробно объяснил, помог выбрать оптимальный вариант. Цена порадовала, качество на высоте. Спасибо!',
    rating: 5,
    date: '28.01.2026',
  },
  {
    id: 3,
    name: 'Сергей Николаев',
    text: 'Второй раз обращаемся в эту компанию. Первый раз заказывали окна в квартиру, теперь — в загородный дом. Всё чётко, без задержек. Мастера профессионалы!',
    rating: 5,
    date: '10.01.2026',
  },
  {
    id: 4,
    name: 'Мария Козлова',
    text: 'Нужно было срочно заменить старое окно. Позвонила утром, вечером уже приехал замерщик, через неделю всё было установлено. Очень оперативно!',
    rating: 5,
    date: '22.12.2025',
  },
  {
    id: 5,
    name: 'Дмитрий Смирнов',
    text: 'Заказывал окна в офис. Понравилось, что сделали точный замер, никаких переплат. Качество профиля отличное, звукоизоляция реально работает. Доволен выбором.',
    rating: 5,
    date: '05.12.2025',
  },
  {
    id: 6,
    name: 'Наталья Волкова',
    text: 'Остекляли веранду на даче. Работа выполнена качественно, ребята учли все наши пожелания. Теперь можно пользоваться верандой круглый год. Спасибо!',
    rating: 5,
    date: '18.11.2025',
  },
  {
    id: 7,
    name: 'Игорь Андреев',
    text: 'Порадовала рассрочка без переплат! Оформили прямо на месте, никаких сложных процедур. Окна красивые, тёплые, никакого конденсата. Компании успехов!',
    rating: 5,
    date: '02.11.2025',
  },
])
</script>

<template>
  <v-container class="reviews-container">
    <h2 class="reviews-header">отзывы клиентов</h2>
    <div class="reviews-scroll">
      <div v-for="review in reviews" :key="review.id" class="review-card">
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

.reviews-scroll::-webkit-scrollbar {
  height: 8px;
}

.reviews-scroll::-webkit-scrollbar-track {
  background: #e0e0e0;
  border-radius: 4px;
}

.reviews-scroll::-webkit-scrollbar-thumb {
  background: #e52e2a;
  border-radius: 4px;
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

.review-card {
  background: #f5f5f5;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
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
