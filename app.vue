<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
const token = useCookie('token');
console.log('token: ', token.value);
onMounted(() => {
  const auth = useAuthState();
  auth.value.user = localStorage.getItem('token');
  auth.value = '213132';
  console.log(auth.value);
});
</script>