<template>
  <div class="chat-card pt-2 pl-2 pr-2 flex w-full items-center" data-testid="chat-card">
    <div class="logo shrink-0 mr-1 w-12 h-12 rounded-full bg-black  dark:bg-white"/>
    <div class="wrapper pb-2 border-b border-gray-700 gap-1 w-full flex flex-col">
      <div class="top flex justify-between">
        <div class="name">Chat 1</div>
        <div class="date">{{ getFormateedDate() }}</div>
      </div>
      <div class="message">This is last message</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { getFormateedDate } from '~/utils/functions';
</script>

<style scoped>

</style>