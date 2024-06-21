<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
const token = useCookie('token');
console.log('token: ', token.value);
</script>