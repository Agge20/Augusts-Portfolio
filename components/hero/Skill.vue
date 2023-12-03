<template>
  <div class="hidden flex-col justify-center text-center opacity-0 first:inline-block"
    :class="[theme === 'light' ? 'text-dark-200' : 'text-white']">
    <img class="h-16 w-16 rounded-lg sm:h-20 sm:w-20" :src="skill.imagePath" :alt="skill.imageAlt" />
    <h4 class="font-medium text-base absolute w-full">{{ skill.title }}</h4>
  </div>
</template>

<script setup lang="ts">
interface Props {
  skill: Skill;
}

defineProps<Props>();

/* Types */
import type { Skill } from "~/types/interfaces/Skill";
/* Store imports */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
const { theme } = storeToRefs(mainStore);
</script>
~/stores/main