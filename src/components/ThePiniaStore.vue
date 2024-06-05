<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter"
import { storeToRefs } from "pinia";
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<style scoped lang="scss">

</style>