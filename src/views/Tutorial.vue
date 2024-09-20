<script setup>
  import { ref } from 'vue'

  const count = ref(0)
  const colorCss=ref('count')

  function increment() {
    count.value++
  }
  
</script>

<template>
  <button @click="increment" :class="colorCss">count is: {{ count }}</button>
</template>
<style>
 .count{
  color:red;
 }
</style>