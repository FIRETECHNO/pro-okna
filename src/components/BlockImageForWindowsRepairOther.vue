<script setup lang="ts">
import MyAccentButton from './MyAccentButton.vue'
</script>
<template>
  <v-container class="container-block-image">
    <v-row>
      <v-col cols="12" class="background-image">
        <div class="all-text-block-image">
          <div class="general-text-block-image">
            <span style="background-color: rgba(55, 55, 55, 1)" class="text-above">
              15 лет устанавливаем окна
            </span>
            <p style="margin-top: 20px">
              ремонт и утепление окон с
              <span style="color: rgba(229, 46, 42, 1)">бесплатной</span>
              диагностикой
            </p>
          </div>
          <div class="features">
            <div class="feature">
              <v-icon color="black" size="40">mdi-shield-outline</v-icon> Гарантия 10 лет
            </div>
            <div class="feature">
              <v-icon color="black" size="40">mdi-watch</v-icon> Окна под ключ за 3 дня
            </div>
            <div class="feature">
              <v-icon color="black" size="40">mdi-credit-card-outline</v-icon> Рассрочка — 0%
            </div>
          </div>
        </div>

        <img
          src="/images/windows-repair/WindowsCorner.png"
          alt=""
          class="content-corner-block-image"
        />
        <div class="container-accent-button">
          <MyAccentButton class="accent-button">Вызвать мастера на замер</MyAccentButton>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.container-block-image {
  height: 60vh;
  min-width: 100% !important;
  padding: 0px;
  background-image: url('/images/windows-repair/WindowsRepairGeneralBlockImage.jpg');
  background-color: rgba(255, 255, 255, 0.7);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;
}
.all-text-block-image {
  padding-left: 10vw;
  padding-top: 9vh;
}
.general-text-block-image {
  font-size: 37px;
  font-weight: 700;
  font-family: 'Montserrat Variable';
  line-height: 37px;
  overflow-wrap: break-word;
  text-transform: uppercase;
  width: 50vw;
}
.text-above {
  background-color: rgba(55, 55, 55, 1);
  font-size: 13px;
  font-weight: 500;
  color: white;
  text-align: center;
  padding: 7px 24px;
  text-transform: none;
  border-radius: 6px;
}
.features {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
}
.feature {
  font-size: 14px;
  font-family: 'Montserrat Variable';
  font-weight: 400;
  line-height: 70%;
}
.content-corner-block-image {
  transform: scaleX(-1);
  height: 40%;
  width: 30%;
  position: absolute;
  left: 70vw;
  top: 40vh;
  min-height: 300px;
  min-width: 200px;
}
.container-accent-button {
  display: none;
  margin-top: 10vh;
}
@media (max-width: 960px) {
  .container-block-image {
    height: 90vh;
  }
  .general-text-block-image {
    font-size: 30px;
    width: 60vw;
  }
  .text-above {
    padding: 10px 38px;
  }
  .content-corner-block-image {
    top: 25vh;
    left: 65vw;
    height: 45%;
    width: 35%;
  }
  .container-accent-button {
    display: flex;
    justify-content: start;
    margin-left: 10vw;
  }
}
@media (max-width: 750px) {
  .container-block-image {
    height: 100vh;
  }
  .general-text-block-image {
    font-size: 25px;
    width: 70vw;
  }
  .content-corner-block-image {
    top: 30vh;
    left: 35vw;
    width: 70%;
    height: 50%;
  }
  .container-accent-button {
    margin-top: 28vh;
  }
  .accent-button {
    font-size: 17px;
  }
}
@media (max-width: 600px) {
  .all-text-block-image {
    padding-left: 5vw;
  }
  .general-text-block-image {
    font-size: 23px;
  }
  .container-accent-button {
    margin-left: 5vw;
  }
}

@media (max-width: 500px) {
  .all-text-block-image {
    padding-left: 5vw;
  }
  .general-text-block-image {
    width: 75vw;
  }
  .features {
    padding-top: 20px;
  }
  .content-corner-block-image {
    height: 35%;
    width: 68%;
    top: 37vh;
    left: 38vw;
  }
  .container-accent-button {
    margin-top: 20vh;
  }
  .accent-button {
    font-size: 14px;
  }
}
@media (max-width: 400px) {
  .text-above {
    font-size: 12px;
    padding: 7px 30px;
  }
  .general-text-block-image {
    font-size: 19px;
    width: 80vw;
  }
  .feature {
    font-size: 11px;
  }
  .content-corner-block-image {
    height: 27%;
    width: 55%;
    left: 41vw;
    top: 38vh;
  }
  .container-accent-button {
    margin-top: 15vh;
  }
}
</style>
