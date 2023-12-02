<template>
  <component :is="size"
    :class="[defaultClasses, sizeClasses, mainStore.theme === 'light' ? 'text-dark-200' : 'text-white']">
    <span v-if="highlightAlignment === 'start'" class="">
      <span
        class="animate-gradient-shine via-turquoise-100 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent transition">
        {{ highlightText }}
      </span>
      {{ headingText }}
    </span>
    <span v-if="highlightAlignment === 'end'">
      {{ headingText }}
      <span
        class="animate-gradient-shine via-turquoise-100 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent transition">
        {{ highlightText }}
      </span>
    </span>
  </component>
</template>

<script setup lang="ts">
interface Props {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  headingText: string;
  highlightText: string;
  highlightAlignment: HighlightAlignment;
}

const props = defineProps<Props>();

/* Types */
import type { HighlightAlignment } from "@/types/HighlightAlignmentTypes";

/* Store imports */
import { useMainStore } from "~/stores/mainStore";

/* Use the main store */
const mainStore = useMainStore();

/* Non-reactive state */

// Default classes for the heading
const defaultClasses = ["mb-8", "text-ch-black-200", "font-ws-regular"];

/* Reactive state */
const sizeClasses = ref<string>("");

// Based on the size prop, set the sizeClasses ref value
switch (props.size) {
  case 'h1':
    sizeClasses.value = "text-4xl";
    break;
  case 'h2':
    sizeClasses.value = "font-bold fluid-4xl";
    break;
  case 'h3':
    sizeClasses.value = "text-xl";
    break;
  case 'h4':
    sizeClasses.value = "text-md opacity-75";
    break;
}
</script>