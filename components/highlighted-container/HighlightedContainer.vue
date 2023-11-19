<template>
  <div class="pt-content">
    <component :is="type"
      class="relative max-w-4xl p-2 drop-shadow-lg before:bg-gradient-to-r before:rounded-lg before:from-blue-100 before:via-turquoise-100 before:to-purple-100 before:w-full before:h-full before:absolute before:-left-0 before:top-0 before:animate-gradient-shine after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-tr after:from-blue-100 after:via-purple-100 after:to-purple-200 after:animate-gradient-shine-and-scale after:blur-md">
      <div :class="[theme === 'light' ? 'bg-white text-dark-200' : 'bg-dark-100 text-white']"
        class="p-5 z-10 relative w-full h-full rounded-lg sm:p-8 ">
        <slot></slot>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">

interface Props {
  type: HighlightedContainerType;
}
defineProps<Props>();

/* Types */
import { HighlightedContainerType } from "@/types/enums/HighlightedContainerType";

/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();

// Import the theme-state from the main store and destructure it into a ref
const { theme } = storeToRefs(mainStore);
</script>