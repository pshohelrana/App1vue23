<script setup>
  defineProps(['title','price'])
</script>
<template>
    <div class="item">
        <div><h3>{{title}}</h3></div>
        <div>Price: {{price}}</div>
        <slot />
    </div>
</template>
<style>
   .item{
    width:200px;
    height:300px;
    box-shadow:0 0 2px 3px rgba(0,0,0,.3);
    padding:10px;
    overflow: hidden;
   }
</style>