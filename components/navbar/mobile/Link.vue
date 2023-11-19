<template>
  <li class="font-gs-semibold my-2 cursor-pointer text-2xl text-white opacity-0">
    <a @click="handleClick(link.scrollToId)"> {{ link.text }} </a>
  </li>
</template>

<script setup lang="ts">
interface NavigationLinkProps {
  link: NavigationLink;
}

defineProps<NavigationLinkProps>();

/* Types */
import { NavigationLink } from "@/types/enums/NavigationTypes";

/* Composables */
import { useScrollToElement } from "~/composables/useScrollToElement";

/* Store imports */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
// Import the openNavbarMobile-state from the main store and destructure it into a ref
const { openNavbarMobile } = storeToRefs(mainStore);

// Define a function to handle the click event
const handleClick = (id: string) => {
  useScrollToElement(`${id}`);
  openNavbarMobile.value = false;
};
</script>
~/stores/main