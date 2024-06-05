<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="mb-4 mt-4 pl-4">
      项目中需要让VSCode使用tailwindcss时有只能提示，是因为VSCode默认在编写字符串时不自动显示建议，
      在项目的<span class="underline">.vscode/settings.json</span>中增加
      <code>"editor.quickSuggestions": {
        "strings": "on"
      }</code> 即可开启
    </div>
    <div class="mt-8 ml-4 m-0 mr-4">Test VSCode in tailwind css</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>