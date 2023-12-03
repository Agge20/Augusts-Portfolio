<template>
  <div class="pt-content max-w-4xl text-white">
    <heading :size="'h2'" :headingText="'Current'" :highlightText="'techstack'" :highlightAlignment="'end'" />
    <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
      <div v-for="skill in skills" class="flex flex-col items-center p-4 bg-dark-300 rounded-2xl">
        <img class="h-16 w-16 rounded-lg sm:h-20 sm:w-20" :src="skill.imagePath" :alt="skill.imageAlt" />
        <h3 class="text-base mt-2">{{ skill.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Store imports */
import { useMainStore } from "~/stores/mainStore";

// Use the main store
const mainStore = useMainStore();

// Import the theme-state from the main store and destructure it into a ref
const { skills } = mainStore;
</script>~/stores/main