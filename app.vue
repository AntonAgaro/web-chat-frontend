<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">

const authState = useAuthState();
const router = useRouter();
console.log('log from pp.vue');
watch(authState.value, (oldState, newState) => {
  if (!newState.user) {
    router.push('/');
  }
});
</script>