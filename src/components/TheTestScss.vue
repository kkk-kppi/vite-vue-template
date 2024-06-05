<template>
  <div class="test-component-container">
    Test, F12 打开控制台 查看字体颜色和字体大小
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'TheTestScss' })
</script>

<style scoped lang="scss">
.test-component-container{
  color: $Dark;
  font-size: $fontSize;
}
</style>