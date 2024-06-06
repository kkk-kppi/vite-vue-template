<template>
  <div class="the-test-pinia-store-2 bg-neutral-200 mt-4">
    <h1 class="text-3xl">The Test Pinia Store 2</h1>
    <div class="the-test-pinia-store mt-8">
      <div class="count mb-2 bg-slate-300">
        count: <span>{{ count }}</span>
      </div>
      <div class="double-count mb-2 bg-gray-300">
        double count: <span>{{ doubleCount }}</span>
      </div>
      <button @click="counterStore.increment" class="increment">add count</button>
    </div>
    <div class="test-theme-store">
      <div class="theme mb-2 bg-slate-300">
        theme: <span>{{ theme }}</span>
      </div>
      <button @click="themeStore.toggleTheme" class="toggle-theme">toggle theme</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/modules/counter'
import { useThemeStore } from '@/stores/modules/theme'
import { storeToRefs } from 'pinia'
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<style scoped lang="scss"></style>
