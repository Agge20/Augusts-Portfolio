<template>
    <li class="font-gs-semibold my-2 cursor-pointer text-2xl text-white opacity-0">
        <a :href="`#${link.scrollToId}`"> {{ link.text }} </a>
    </li>
</template>

<script setup lang="ts">
    // Import types
    import { NavigationLink } from "@/types/NavigationTypes";

    // Create the interface of the props
    interface NavigationLinkProps {
        link: NavigationLink;
    }

    defineProps<NavigationLinkProps>();
</script>
