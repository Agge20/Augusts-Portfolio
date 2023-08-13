<template>
    <li
        :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
        class="hover:animate-gradient-shine font-gs-semibold mx-4 lg:mx-6 cursor-pointer text-2xl lg:text-3xl opacity-0 last-of-type:mr-12 hover:bg-gradient-to-r hover:from-green-100 hover:via-green-400 hover:to-green-100 hover:bg-clip-text hover:text-transparent"
    >
        <a :href="`#${link.scrollToId}`"> {{ link.text }} </a>
    </li>
</template>

<script setup lang="ts">
    // Import types
    import { NavigationLink } from "@/types/NavigationTypes";

     // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Use the main store
    const mainStore = useMainStore();
    // Import the theme-state from the main store and destructure it into a ref
    const { theme } = storeToRefs(mainStore);

    // Create the interface of the props
    interface NavigationLinkProps {
        link: NavigationLink;
    }

    defineProps<NavigationLinkProps>();
</script>
