<template>
  <div @click="mainStore.toggleTheme()" :class="mainStore.theme === 'light' ? 'bg-dark-100' : 'bg-white'"
    class="to-turquoise-100 group fixed left-4 top-4 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-100 via-purple-200 transition sm:h-16 sm:w-16 md:bottom-4 md:top-auto">
    <icon v-if="mainStore.theme === 'light'" name="jam:moon-f" size="75%"
      class="text-dark-200 rounded-full transition group-hover:scale-110" />
    <icon v-if="mainStore.theme === 'dark'" name="jam:sun-f" size="75%"
      class="rounded-full text-white transition group-hover:scale-110" />
  </div>
</template>

<script setup lang="ts">
/* Store imports */
import { useMainStore } from "~/stores/MainStore";

// Use the main store
const mainStore = useMainStore();
</script>
