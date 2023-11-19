<template>
  <h2 :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
    class="font-gs-bold sm:fluid-5xl mb-4 text-5xl opacity-0 transition sm:mb-0">
    My name is
    <span
      class="animate-gradient-shine via-turquoise-100 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent transition">August</span>.
  </h2>
</template>

<script setup lang="ts">
/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
// Import the theme-state from the main store and destructure it into a ref
const { theme } = storeToRefs(mainStore);
</script>
~/stores/main