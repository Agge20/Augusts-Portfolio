<template>
  <h3 class="text-white font-gs-semibold text-4xl">{{ text }}</h3>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}
defineProps<Props>();
</script>