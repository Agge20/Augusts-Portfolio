<template>
  <li class="font-gs-semibold my-2 cursor-pointer text-2xl text-white opacity-0">
    <a :href="`#${link.scrollToId}`"> {{ link.text }} </a>
  </li>
</template>

<script setup lang="ts">
interface NavigationLinkProps {
  link: NavigationLink;
}

defineProps<NavigationLinkProps>();

/* Types */
import { NavigationLink } from "@/types/enums/NavigationTypes";
</script>
