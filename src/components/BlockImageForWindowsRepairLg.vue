<script setup lang="ts"></script>
<template>
  <v-container class="container-block-image">
    <v-row>
      <v-col cols="9" class="background-image">
        <span style="background-color: rgba(55, 55, 55, 1)" class="text-above">
          15 лет устанавливаем окна
        </span>
        <p style="width: 60%; margin-top: 20px">
          ремонт и утепление окон с
          <span style="color: rgba(229, 46, 42, 1)">бесплатной</span>
          диагностикой
        </p>
      </v-col>
      <v-col
        cols="3"
        style="
          background: radial-gradient(rgba(123, 132, 132, 1), rgba(55, 55, 55, 1));
          position: relative;
        "
      >
        <img
          src="/images/windows-repair/WindowsCorner.png"
          alt=""
          style="
            transform: scaleX(-1);
            position: absolute;
            right: 12vw;
            top: 10vh;
            max-height: 55vh;
          "
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.container-block-image {
  height: 60vh;
  min-width: 100% !important;
  padding: 0px;
}
.background-image {
  font-size: 37px;
  font-weight: 700;
  font-family: 'Montserrat Variable';
  line-height: 37px;
  overflow-wrap: break-word;
  text-transform: uppercase;
  background-image: url('/images/windows-repair/WindowsRepairGeneralBlockImage.jpg');
  background-color: rgba(255, 255, 255, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;
  padding-left: 10vw;
  padding-top: 12vh;
}
.text-above {
  background-color: rgba(55, 55, 55, 1);
  font-size: 13px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 7px 24px;
  text-transform: none;
  border-radius: 4px;
}
</style>
