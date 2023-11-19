<template>
  <h3 :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
    class="font-gs-semibold lg:fluid-3xl mr-2 w-auto text-3xl opacity-0 transition lg:mr-4">
    I build stuff with:
  </h3>
</template>

<script setup lang="ts">
/* Store imports */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
// Import the theme-state from the main store and destructure it into a ref
const { theme } = storeToRefs(mainStore);
</script>
~/stores/main