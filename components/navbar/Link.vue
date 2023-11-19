<template>
  <li :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
    class="hover:animate-gradient-shine font-gs-semibold hover:via-turquoise-100 mx-4 cursor-pointer text-2xl opacity-0 last-of-type:mr-12 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-200 hover:bg-clip-text hover:text-transparent lg:mx-6 lg:text-3xl">
    <a @click="useScrollToElement(link.scrollToId)"> {{ link.text }} </a>
  </li>
</template>

<script setup lang="ts">
interface NavigationLinkProps {
  link: NavigationLink;
}

defineProps<NavigationLinkProps>();

/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

/* Types */
import { NavigationLink } from "@/types/enums/NavigationTypes";

// Use the main store
const mainStore = useMainStore();
// Import the theme-state from the main store and destructure it into a ref
const { theme } = storeToRefs(mainStore);

/* Composables */
import { useScrollToElement } from "~/composables/useScrollToElement";
</script>
