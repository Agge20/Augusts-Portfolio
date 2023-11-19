<template>
  <HighlightedContainer :type="HighlightedContainerType.Div">
    <heading :size="HeadingSize.H2" :headingText="'Current'" :highlightText="'techstack'" :highlightAlignment="'end'" />
    <div class="grid gap-5 grid-cols-2 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5">
      <div v-for="skill in skills" class="flex flex-col items-center p-4 bg-dark-200 rounded-2xl">
        <img class="h-16 w-16 rounded-lg sm:h-20 sm:w-20" :src="skill.imagePath" :alt="skill.imageAlt" />
        <h3 class="text-base mt-2">{{ skill.title }}</h3>
      </div>
    </div>
  </HighlightedContainer>
</template>

<script setup lang="ts">
/* Types */
import { HighlightedContainerType } from "@/types/enums/HighlightedContainerType";
import { HeadingSize } from "@/types/enums/HeadingTypes";

/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();

// Import the theme-state from the main store and destructure it into a ref
const { skills } = mainStore;
</script>