<template>
    <h2 :class="theme === 'light' ? 'text-dark-200' : 'text-white'" class="font-gs-bold sm:fluid-6xl text-6xl opacity-0 transition">
        My name is
        <span class="animate-gradient-shine bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent transition"
            >August</span
        >.
    </h2>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Use the main store
    const mainStore = useMainStore();
    // Import the theme-state from the main store and destructure it into a ref
    const { theme } = storeToRefs(mainStore);
</script>
