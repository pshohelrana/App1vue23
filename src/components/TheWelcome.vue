<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'

</script>

<template>
  <WelcomeItem>
    <template #icon><DocumentationIcon /></template>
    <template #heading>Documentation</template>
    <template #body>Body</template>
    <template #footer>Footer</template>
  </WelcomeItem>  


</template>
