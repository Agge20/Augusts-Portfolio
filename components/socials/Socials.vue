<template>
  <ul :class="theme === 'light' ? 'bg-dark-200' : 'bg-white'"
    class="animate-fade-in z-20 hidden items-center gap-3 self-center rounded-full px-4 py-3 md:flex">
    <li class="rounded-md transition-all hover:scale-105">
      <a :href="socialUrls.linkedin" target="_blank" class="relative inline-block h-full">
        <span class="absolute left-1 top-1 inline-block h-4/5 w-4/5 bg-white"></span>
        <icon name="logos:linkedin-icon" size="2em" :class="theme === 'light' ? '' : 'text-dark-200'"
          class="relative rounded-md" />
      </a>
    </li>
    <li class="rounded-md bg-black transition-all hover:scale-105">
      <a :href="socialUrls.github" target="_blank">
        <icon name="uil:github" size="2.5em" :class="theme === 'light' ? 'text-white' : 'text-dark-200'" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
/* Types */
import { socialUrls } from "@/types/enums/SocialUrls";

/* Store imports */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
const { theme } = storeToRefs(mainStore);
</script>
~/stores/main