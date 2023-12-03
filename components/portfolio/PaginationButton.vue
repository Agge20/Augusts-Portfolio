<template>
  <button :class="[
    direction === 'backwards' ? 'flex-row-reverse' : 'flex-row',
    theme === 'light' ? 'border-dark-300 bg-white text-dark-300 hover:bg-dark-300 hover:text-white' : 'border-white bg-dark-300 text-white hover:bg-white hover:text-dark-300'
  ]" class="rounded-md w-1/2 border-2  p-4 flex justify-center transition hover:scale-105 sm:w-auto">{{
  text }}
    <icon :class="direction === 'backwards' ? 'mr-1' : 'ml-1'" class="min-w-6"
      :name="`uil:${direction === 'backwards' ? 'arrow-left' : 'arrow-right'}`" size="1.5rem" />
  </button>
</template>

<script setup lang="ts">
interface Props {
  direction: 'backwards' | 'forward'
  text: string
}

defineProps<Props>();

/* Store imports */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
const { theme } = storeToRefs(mainStore);
</script>
