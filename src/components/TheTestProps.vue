<template>
  <div class="test-component-container">
    Test： {{ test }}
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'TheTestProps' })

withDefaults(defineProps<{
  test?: string
}>(), {
  test: 'Test Default Value'
})
</script>

<style scoped lang="scss">
</style>