<template>
  <span class="text-base text-white font-medium">{{ text }}</span>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>