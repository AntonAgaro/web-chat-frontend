<template>
  <UDropdown :items="dropdownItems" >
    <UButton
        data-testid="user-button"
        class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 dark:hover:bg-gray-100 hover:bg-gray-100">
      <!-- TODO заглушка либо юзер аватарка -->
      <svg class="absolute w-6 h-6 text-gray-400 left-1 top-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
      </svg>
    </UButton>
  </UDropdown>

</template>

<script setup lang="ts">
const authState = useAuthState();

const dropdownItems = [
  [
    {
      label: 'Log out',
      click: () => {
        authState.value.user = null;
        useAuthController().logout();
      },
      class: 'testid-logout'
    }
  ],
  [
    {
      label: 'Profile',
    },
      
  ]
];
</script>

<style scoped>

</style>