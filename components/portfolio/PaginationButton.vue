<template>
  <button :class="direction === 'backwards' ? 'flex-row-reverse' : 'flex-row'"
    class="rounded-md w-1/2 border-2 border-white p-4 bg-dark-300 text-white flex justify-center transition hover:bg-white hover:text-dark-300 hover:scale-105 sm:w-auto">{{
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
</script>
