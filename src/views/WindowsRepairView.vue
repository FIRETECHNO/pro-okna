<script setup>
import BlockImageForWindowsRepairLg from '@/components/BlockImageForWindowsRepairLg.vue'
import BlockImageForWindowsRepairOther from '@/components/BlockImageForWindowsRepairOther.vue'
</script>
<template>
  <v-container class="co" style="max-width: 100% !important; padding: 16px 0px">
    <BlockImageForWindowsRepairLg class="d-none d-lg-flex"> </BlockImageForWindowsRepairLg>
    <BlockImageForWindowsRepairOther class="d-flex d-lg-none"></BlockImageForWindowsRepairOther>
  </v-container>
</template>
<style scoped>
@media (max-width: 960px) {
  .co {
    margin-top: 94px;
  }
}
</style>
