<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
const count = ref(0)
</script>

<template>
  <main>
    <TheWelcome />
    <NButton type="primary" @click="count++">Primary, {{ count }}</NButton>
  </main>
</template>
