<template>
    <div class="h-28 w-28 flex-col justify-center text-center opacity-0" :class="[theme === 'light' ? 'text-dark-200' : 'text-white']">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
</script>
