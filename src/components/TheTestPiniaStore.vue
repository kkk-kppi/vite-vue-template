<template>
  <div class="the-test-pinia-store-1 bg-neutral-200 mt-4">
    <h1 class="text-3xl">The Test Pinia Store 1</h1>
    <div class="mt-2">
      <div class="count mb-2 bg-slate-300">
        count: <span>{{ count }}</span>
      </div>
      <div class="double-count mb-2 bg-gray-300">
        double count: <span>{{ doubleCount }}</span>
      </div>
      <button @click="counterStore.increment" class="increment">add count</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/modules/counter'
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
</script>

<style scoped lang="scss"></style>
