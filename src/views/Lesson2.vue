<script setup>
  import { ref } from 'vue'
  
  const text=ref('')

  function onType(e){
    text.value=e.target.value;
  }
</script>

<template>
<input type="text" @input="onType" />
<p>
 {{ text }}
</p>
</template>
<style>
</style>