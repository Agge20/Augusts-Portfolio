<template>
    <h3
        :class="theme === 'light' ? 'text-dark-200' : 'text-white'"
        class="font-gs-semibold lg:fluid-3xl mt-2 text-3xl opacity-0 transition sm:mt-0"
    >
        I build stuff with:
    </h3>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
</script>
