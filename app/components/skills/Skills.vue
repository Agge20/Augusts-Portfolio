<template>
  <div>
    <div v-for="skill in skills">
      <span>{{ skill.title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();

// Import the theme-state from the main store and destructure it into a ref
const { skills } = storeToRefs(mainStore);
</script>