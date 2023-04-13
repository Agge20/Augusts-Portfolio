<template>
    <li
        class="hover:animate-gradient-shine text-ap-white-100 font-gs-semibold hover:from-ap-green-100 hover:via-ap-green-400 hover:to-ap-green-100 mx-6 cursor-pointer text-3xl opacity-0 last-of-type:mr-12 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent"
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
