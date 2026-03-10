<script setup lang="ts">
import BlockImageForWindowsRepairLg from '@/components/BlockImageForWindowsRepairLg.vue'
import BlockImageForWindowsRepairOther from '@/components/BlockImageForWindowsRepairOther.vue'
import OurServicesForWindowsRepair from '@/components/OurServicesForWindowsRepair.vue'
import Advantage from '@/components/Advantage.vue'
import FormWindowsView from '@/components/Form/FormWindowsView.vue'

const advantages = [
  {
    icon: 'mdi-medal-outline',
    name: 'Собственное производство',
    text: 'Работаем без посредников — честные цены и контроль качества.',
  },
  {
    icon: 'mdi-clipboard-list-outline',
    name: 'Бесплатная диагностика',
    text: 'Выезд специалиста в удобное для вас время.',
  },
  {
    icon: 'mdi-shield-check-outline',
    name: 'Гарантия 1 год',
    text: 'На материалы и выполненные работы.',
  },
]

</script>
<template>
  <div>
    <v-container class="co" style="max-width: 100% !important; padding: 16px 0px">
      <BlockImageForWindowsRepairLg class="d-none d-lg-flex"> </BlockImageForWindowsRepairLg>
      <BlockImageForWindowsRepairOther class="d-flex d-lg-none"></BlockImageForWindowsRepairOther>
    </v-container>
    <v-container class="block-advantages flex-col flex-sm-row">
      <Advantage v-for="advantage in advantages" :key="advantage.name" :icon="advantage.icon" :name="advantage.name"
        :text="advantage.text">
      </Advantage>
    </v-container>
    <v-container>
      <OurServicesForWindowsRepair></OurServicesForWindowsRepair>
    </v-container>

    <div id="order-form" style="margin-top: 50px;">
      <FormWindowsView></FormWindowsView>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 960px) {
  .co {
    margin-top: 94px;
  }
}

.block-advantages {
  display: flex;
  /* padding: 6px 8px 0px 8px; */
  justify-items: space-between;
}
</style>
