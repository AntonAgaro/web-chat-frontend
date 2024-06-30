<template>
    <div class="page-wrapper">
      <app-header/>
      <main class="page-content">
       <div class="container">
         <slot />
       </div>
      </main>
      <footer class="page-footer">
        <div class="container">
          <switch-locale/>
        </div>
      </footer>
    </div>
</template>
<script setup lang="ts">
</script>