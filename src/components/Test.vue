<template>
  <div>
    <div class="test">Test, {{ computedDark }}</div>
    <button @click="handleToggleisDark">toggle isDark {{ isDark }}</button>
    <button @click="handleToggleTheme">toggle theme {{ computedTheme }}</button>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia'
const appStore = useAppStore();
const { isDark } = storeToRefs(appStore)
const computedDark = computed(() => appStore.isDark)
const handleToggleisDark = () => appStore.toggleDark()

import { useThemeStore } from '@/store';
const themeStore = useThemeStore();
const computedTheme = computed(() => themeStore.theme)
const handleToggleTheme = () => themeStore.toggleTheme()
</script>

<style lang="scss" scoped>
.test {
  font-size: $fontSize;
  color: $Dark;
}
</style>