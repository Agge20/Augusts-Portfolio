<template>
  <h1 :class="[theme === 'light' ? 'text-dark-200' : 'text-white']"
    class="font-gs-bold sm:fluid-6xl mb-8 text-7xl opacity-0 transition">Hello.</h1>
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