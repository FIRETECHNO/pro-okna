<script setup lang="ts">
import BlockImageForWindowsRepairLg from '@/components/BlockImageForWindowsRepairLg.vue'
import BlockImageForWindowsRepairOther from '@/components/BlockImageForWindowsRepairOther.vue'
import OurServicesForWindowsRepair from '@/components/OurServicesForWindowsRepair.vue'
</script>
<template>
  <v-container class="co" style="max-width: 100% !important; padding: 16px 0px">
    <BlockImageForWindowsRepairLg class="d-none d-lg-flex"> </BlockImageForWindowsRepairLg>
    <BlockImageForWindowsRepairOther class="d-flex d-lg-none"></BlockImageForWindowsRepairOther>
  </v-container>
  <v-container>
    <OurServicesForWindowsRepair></OurServicesForWindowsRepair>
  </v-container>
</template>
<style scoped>
@media (max-width: 960px) {
  .co {
    margin-top: 94px;
  }
}
</style>
