<template>
    <li
        class="hover:animate-gradient-shine text-ap-white-100 font-gs-semibold hover:from-ap-green-100 hover:via-ap-green-400
        hover:to-ap-green-100 mx-6 cursor-pointer text-3xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent last-of-type:mr-12"
    >
      <a :href="`#${link.scrollToId}`"> {{ link.text }} </a>
    </li>
</template>

<script setup lang="ts">
    import { NavigationLink } from "@/types/NavigationTypes";

    // Create the interface of the props
    interface NavigationLinkProps {
        link: NavigationLink;
    }

    defineProps<NavigationLinkProps>();
</script>

