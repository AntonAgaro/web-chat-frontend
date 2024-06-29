<template>
  <div class="chats-page border-gray-700	border flex h-full" data-testid="chats-page">
    <div class="chats-list pt-2 pb-2 border-r border-gray-700 basis-1/3">
      <h3>Chats List</h3>
      <div class="list flex flex-col">
        <ChatCard/>
        <ChatCard/>
        <ChatCard/>
      </div>
    </div>
    <div class="chat basis-2/3">
      <h2>Choose chat!</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatCard from '~/components/ChatCard.vue';

const authState = useAuthState();
console.log('from chats: ', authState.value.user);
</script>

<style scoped>

</style>