<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  <UNotifications />
</template>
<script setup lang="ts">
const token = useCookie('token');
const authState = useAuthState();
console.log(token.value);
const authController = useAuthController();
if (token.value) {
  authController.getUserDetails(token.value).then((data) => {
    console.log('from app: ', data);
    if (data.user) {
      authState.value.user = data.user;
    }
  });
}

onMounted(() => {
  console.log('from app: ', authState.value.user?.username);
});

</script>