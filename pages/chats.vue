<template>
  <div class="chats-page border-gray-700	border flex h-full" data-testid="chats-page">
    <div class="chats-list pt-2 pb-2 border-r border-gray-700 max-md:basis-full basis-1/3" :class="{'max-md:hidden': activeChatId}">
      <h3>{{ $t('Chats list') }}</h3>
      <div class="list flex flex-col">
        <ChatCard v-for="chat in chatsMock" :key="chat.id" @click="activeChatId = chat.id"/>
      </div>
    </div>
    <div class="chat max-md:basis-full basis-2/3" :class="{'max-md:hidden': !activeChatId}">
      <UIcon name="i-heroicons-arrow-left md:hidden" class="w-5 h-5" @click="activeChatId = null" />
      <h2 v-if="!activeChatId">{{ $t('Choose chat')! }}</h2>
      <h2 v-else> {{ activeChatId }} </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatCard from '~/components/ChatCard.vue';
const chatsMock = ref([
  { id: 1 },  { id: 2 },  { id: 3 }
]);
const activeChatId = ref<number | null>(null);

const authState = useAuthState();
console.log('from chats: ', authState.value.user);
</script>

<style scoped>

</style>