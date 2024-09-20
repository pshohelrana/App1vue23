<script setup>
    import {ref} from 'vue'
    const awesome=ref(true)
    function toggle(e){
      awesome.value=!awesome.value;
    }
</script>

<template>
  <input type="button" @click="toggle" value="Show" >
  <div v-if="awesome" class="color-red">Vue is awesome!</div>
  <div v-else class="color-green">Oh no 😢</div>
</template>

<style>
  .color-red{
    color:red;
  }
  .color-green{
    color:green;
  }

</style>