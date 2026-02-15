<script setup lang="ts">
import '@fontsource-variable/montserrat';
const props = defineProps<{
    imageUrl : string,
}>()

let imageUrl = props.imageUrl;

</script>
<template>
    <v-container class="container" :style="{backgroundImage : 'url(' + imageUrl + ')'}">
        <v-row style="height: 100%; margin: 0;">
            <v-col cols="8" class="textBlock">
                <div>
                    <slot name="mainText"></slot>
                    <slot style="color: #E52E2A;" name="discount"></slot>
                </div>
                
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>

img{
    margin: 0;
    padding: 0;
}
.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
}
.textBlock{
    color: white;
    font-size: 80px;
    font-family: "Montserrat Variable", sans-serif;
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 90px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 0px 100px 30px 60px;
    clip-path: polygon(0% 0%, 60% 0%, 100% 50%, 60% 100%, 0% 100%);

}
@media (max-width:880px) {
    .textBlock{
        font-size: 46px;
        line-height: 50px;
    }
}
</style>