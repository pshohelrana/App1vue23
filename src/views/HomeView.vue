<script setup lang="ts">
import WelcomeItem from '@/components/WelcomeItem.vue';
</script>

<template>
  <main>
    <h1>Dashboard</h1>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
      <template #body>Body</template>
      <template #footer>Footer</template>
    </WelcomeItem>
  </main>
</template>
