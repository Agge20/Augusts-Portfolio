<template>
  <li
    class="text-white font-gs-semibold hover:via-turquoise-100 mx-2 cursor-pointer text-xl opacity-0 first:ml-0 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-200 hover:bg-clip-text hover:text-transparent hover:animate-gradient-shine xl:mx-4 xl:text-xl">
    <button :aria-label="`Go to the ${link.text.toLowerCase()} section`" @click="useScrollToElement(link.scrollToId)"> {{
      link.text }}
    </button>
  </li>
</template>

<script setup lang="ts">
interface NavigationLinkProps {
  link: NavigationLink;
}

defineProps<NavigationLinkProps>();

/* Store imports */
import { useMainStore } from "~/stores/mainStore";
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
~/stores/main