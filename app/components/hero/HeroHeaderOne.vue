<template>
    <h1
        :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
        class="font-gs-semibold lg:fluid-3xl mb-2 translate-x-0 text-3xl opacity-0 transition sm:mb-0"
    >
        Hello.
    </h1>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Use the main store
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
</script>
