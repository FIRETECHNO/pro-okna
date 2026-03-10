<script setup lang="ts"></script>
<template>
  <v-container>
    <p class="header-our-products">Наши услуги</p>
    <a href="#order-form">
      <v-row style="margin-top: 60px;" class="d-flex">
        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">
            <p>Регулировка пластиковых окон и дверей</p>
            <img class="card-img card-img-7" src="/images/windows-repair/services/WindowAdjusting.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Замена уплотнителей</p>
            <img class="card-img card-img-2" src="/images/windows-repair/services/Seals.webp" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Ремонт и замена фурнитуры</p>
            <img class="card-img card-img-5" src="/images/windows-repair/services/Implements.png" alt="" />
          </div>
        </v-col>


        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Замена стеклопакета</p>
            <img class="card-img card-img-3" src="/images/windows-repair/services/DoubleGlazing.png" alt="" />
          </div>
        </v-col>
        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Модернизация пластиковых окон и балконных дверей</p>
            <img class="card-img card-img-4" src="/images/windows-repair/services/BalconyDoor.png" alt="" />
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Москитные сетки</p>
            <img class="card-img card-img-6" src="/images/windows-repair/services/Grid.png" alt="" />
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Замена и установка подоконников</p>
            <img class="card-img card-img-1" src="/images/windows-repair/services/Windowsill.png" alt="" />
          </div>
        </v-col>

        <v-col cols="12" md="3" sm="6">
          <div class="card-container-service">

            <p>Отделка окон</p>
            <img src="/images/windows-repair/services/WindowsFinishing.png" alt="" class="card-img card-img-8" />
          </div>
        </v-col>
      </v-row>
    </a>
  </v-container>
</template>
<style scoped>
.header-our-products {
  font-size: 25px;
  font-family: 'Montserrat Variable';
  font-weight: 700;
  line-height: 70%;
}

.card-container-service {
  cursor: pointer;
  font-size: 17px;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 25px;
  overflow-wrap: break-word;
  /* height: 300px; */
  aspect-ratio: 1;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 16px;
  padding: 14px;
  /* max-width: 23%; */
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  position: relative;
}

.card-img {
  position: absolute;
}

.card-img-1 {
  /* transform: rotateY(166.19deg); */
  bottom: 20px;
  right: 0px;
}

.card-img-2 {
  transform: scale(0.6);
  /* top: 0px; */
  bottom: 0;
  width: 100%;
  left: -80px;
}

.card-img-3 {
  transform: scaleX(-1);
  /* transform: ; */
  bottom: 0px;
  right: -80px;
}

.card-img-4 {
  bottom: 10px;
  right: 10px;
  width: 70%;
}

.card-img-5 {
  /* transform: rotate(108.27deg); */
  bottom: 0px;
}

.card-img-6 {
  top: 60px;
}

.card-img-7 {
  left: 2px;
  bottom: 0px;
}

.card-img-8 {
  transform: scaleX(-1);
  right: 8px;
  bottom: -20px;
}

@media (max-width: 1285px) {
  .card-container-service {
    font-size: 15px;
  }

  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-6 {
    left: 50px;
  }
}

@media (max-width: 1145px) {

  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-6 {
    left: 50px;
  }

  .card-img-7 {
    top: 30px;
  }
}

@media (max-width: 960px) {
  .card-container-service {
    font-size: 14px;
  }
}

@media (max-width: 750px) {

  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-6 {
    left: 50px;
  }

  .card-img-7 {
    top: 60px;
  }

}

@media (max-width: 600px) {

  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-7 {
    top: 60px;
  }
}

@media (max-width: 450px) {

  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-6 {
    left: 50px;
  }

  .card-img-7 {
    top: 90px;
  }

  .card-img-8 {
    top: 80px;
  }
}

@media (max-width: 400px) {
  .card-img-4 {
    top: 100px;
    left: 70px;
  }

  .card-img-6 {
    left: 50px;
  }

  .card-img-7 {
    top: 150px;
  }

  .card-img-8 {
    top: 130px;
  }
}
</style>
