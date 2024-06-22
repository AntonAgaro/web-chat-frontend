<template>
  <header class="page-header">
    <div class="container">
      <div class="pt-2 pb-2 flex justify-between">
        <switch-theme />
        <user-button v-if="authState.user" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const authState = useAuthState();
</script>

<style scoped>

</style>