<template>
  <div class="the-test-pinia-store-2 bg-neutral-200 mt-4">
    <h1 class="text-3xl">The Test Mock</h1>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const user = ref(null);
onMounted(() => {
  fetch('/api/user').then( res => res.json()).then( json => {
    user.value = json;
  })
  fetch('/api/user/1').then( res => res.json()).then( json => {
    user.value = json;
  })
})
</script>

<style scoped lang="scss"></style>
