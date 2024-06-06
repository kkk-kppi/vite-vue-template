<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="section">
      <TheTestProps />
      <TheTestScss />
      <TheTestTailwind />
      <TheTestPiniaStore />
      <TheTestPiniaStore2 />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheTestProps from '@/components/TheTestProps.vue'
import TheTestScss from '@/components/TheTestScss.vue'
import TheTestTailwind from '@/components/TheTestTailwind.vue'
import TheTestPiniaStore from '@/components/TheTestPiniaStore.vue'
import TheTestPiniaStore2 from '@/components/TheTestPiniaStore2.vue'
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
