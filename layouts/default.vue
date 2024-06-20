<template>
    <div class="page-wrapper">
      <header class="page-header">
       <div class="container">
         <h2>Header</h2>
         <switch-theme />
       </div>
      </header>
      <main class="page-content">
       <div class="container">
         <slot />
       </div>
      </main>
      <footer class="page-footer">
        <div class="container">
          <h2>Footer</h2>
        </div>
      </footer>
    </div>
</template>
<script setup lang="ts">
</script>