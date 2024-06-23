<template>
  <div data-testid="chats-page">
    <h1>Chats</h1>
  </div>
</template>

<script setup lang="ts">
const authState = useAuthState();
console.log('from chats: ', authState.value.user);
</script>

<style scoped>

</style>