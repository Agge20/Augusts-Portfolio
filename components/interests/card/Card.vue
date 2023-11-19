<template>
  <button aria-label="Interest" @mouseover="showText = true" @mouseleave="showText = false"
    @touchStart="showText = !showText" @touchEnd="showText = !showText"
    class="relative w-full min-h-88 p-4 bg-blue-100 rounded-xl bg-cover bg-center transition flex flex-col justify-start items-start lg:w-1/3 hover:scale-102 lg:hover:scale-105"
    :style="`background-image: url(${interest.imagePath})`">
    <!-- Dark overlay -->
    <div :class="showText ? 'opacity-50' : 'opacity-25'"
      class="bg-dark-200 absolute top-0 left-0 w-full h-full  transition-opacity"></div>
    <!-- Vignette and heading -->
    <div :class="{ 'opacity-0': showText }" class="relative flex flex-col items-start z-10 transition-opacity">
      <InterestsCardVignette :text="'Interest'" />
      <InterestsCardHeading :text="interest.title" />
    </div>
    <!-- Text -->
    <p :class="{ 'opacity-100': showText }" class="relative z-10 text-white opacity-0 transition-opacity text-left">
      {{ interest.text }}
    </p>
  </button>
</template>

<script setup lang="ts">
import type { Interest } from "@/types/Interest";

interface Props {
  interest: Interest;

}

defineProps<Props>();

const showText = ref<boolean>(false);
</script>