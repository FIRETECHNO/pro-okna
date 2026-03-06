<script setup lang="ts"></script>
<template>
  <v-container>
    <p class="header-our-products">Наши услуги</p>
    <v-row style="margin-top: 100px; justify-content: center">
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Замена и установка подоконников</p>
        <img
          class="card-img card-img-1"
          src="/images/windows-repair/services/Windowsill.png"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Замена уплотнителей</p>
        <img class="card-img card-img-2" src="/images/windows-repair/services/Seals.png" alt="" />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Замена стеклопакета</p>
        <img
          class="card-img card-img-3"
          src="/images/windows-repair/services/DoubleGlazing.png"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Ремонт пластиковых окон и балконных дверей</p>
        <img
          class="card-img card-img-4"
          src="/images/windows-repair/services/BalconyDoor.png"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Ремонт и замена фурнитуры</p>
        <img
          class="card-img card-img-5"
          src="/images/windows-repair/services/Implements.png"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Ремонт и замена фурнитуры</p>
        <img class="card-img card-img-6" src="/images/windows-repair/services/Grid.png" alt="" />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Ремонт входных групп</p>
        <img
          class="card-img card-img-7"
          src="/images/windows-repair/services/EntranceGroup.png"
          alt=""
        />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="card-container-service">
        <p>Отделка окон</p>
        <img
          src="/images/windows-repair/services/WindowsFinishing.png"
          alt=""
          class="card-img card-img-8"
        />
      </v-col>
    </v-row>
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
  font-size: 17px;
  font-family: 'Montserrat Variable';
  font-weight: 600;
  line-height: 25px;
  overflow-wrap: break-word;
  height: 27vh;
  background-color: rgba(217, 217, 217, 1);
  margin: 8px;
  border-radius: 16px;
  padding: 14px;
  max-width: 23%;
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
  transform: rotateY(166.19deg);
  top: 140px;
  right: 60px;
}
.card-img-2 {
  transform: rotate(94.9deg);
  top: 100px;
  left: 50px;
}
.card-img-3 {
  transform: scaleX(-1);
  top: 100px;
  left: 50px;
}
.card-img-4 {
  top: 70px;
  left: 100px;
}
.card-img-5 {
  transform: rotate(108.27deg);
  top: 150px;
}
.card-img-6 {
  top: 60px;
}
.card-img-7 {
  right: 2px;
  top: 70px;
}
.card-img-8 {
  transform: scaleX(-1);
  right: 8px;
  top: 60px;
}
@media (max-width: 1285px) {
  .card-container-service {
    font-size: 15px;
  }
  .card-img-2 {
    top: 140px;
  }
  .card-img-3 {
    top: 130px;
  }
  .card-img-4 {
    top: 100px;
    left: 70px;
  }
  .card-img-6 {
    left: 50px;
  }
  .card-img-7 {
    top: 120px;
  }
  .card-img-8 {
    top: 110px;
  }
}
@media (max-width: 1145px) {
  .card-container-service {
    max-width: 47%;
  }
  .card-img-1 {
    top: 100px;
  }
  .card-img-2 {
    top: 50px;
  }
  .card-img-3 {
    top: 30px;
  }
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
  .card-img-8 {
    top: 10px;
  }
}
@media (max-width: 960px) {
  .card-container-service {
    font-size: 14px;
  }
}
@media (max-width: 750px) {
  .card-img-1 {
    top: 130px;
  }
  .card-img-2 {
    top: 50px;
  }
  .card-img-3 {
    top: 50px;
  }
  .card-img-4 {
    top: 100px;
    left: 70px;
  }
  .card-img-5 {
    top: 120px;
  }
  .card-img-6 {
    left: 50px;
  }
  .card-img-7 {
    top: 60px;
  }
  .card-img-8 {
    top: 50px;
  }
}
@media (max-width: 600px) {
  .card-container-service {
    max-width: 90%;
    height: 300px;
  }
  .card-img-1 {
    top: 100px;
  }
  .card-img-2 {
    top: 70px;
  }
  .card-img-3 {
    top: 0px;
  }
  .card-img-4 {
    top: 100px;
    left: 70px;
  }
  .card-img-5 {
    top: 160px;
  }
  .card-img-7 {
    top: 60px;
  }
  .card-img-8 {
    top: 50px;
  }
}
@media (max-width: 450px) {
  .card-img-1 {
    top: 150px;
  }
  .card-img-2 {
    top: 110px;
  }
  .card-img-3 {
    top: 100px;
  }
  .card-img-4 {
    top: 100px;
    left: 70px;
  }
  .card-img-5 {
    top: 160px;
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
  .card-img-1 {
    top: 150px;
  }
  .card-img-2 {
    top: 110px;
  }
  .card-img-3 {
    top: 100px;
  }
  .card-img-4 {
    top: 100px;
    left: 70px;
  }
  .card-img-5 {
    top: 160px;
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
