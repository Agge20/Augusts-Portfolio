<template>
    <div
        @click="mainStore.toggleTheme()"
        :class="mainStore.theme === 'light' ? 'bg-dark-100' : 'bg-white'"
        class="group absolute left-4 top-4 z-30 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition md:bottom-4 md:top-auto"
    >
        <icon
            v-if="mainStore.theme === 'light'"
            name="jam:moon-f"
            size="3em"
            class="bg-dark-100 rounded-full text-white transition group-hover:scale-110"
        />
        <icon
            v-if="mainStore.theme === 'dark'"
            name="jam:sun-f"
            size="3em"
            class="text-dark-100 rounded-full bg-white transition group-hover:scale-110"
        />
    </div>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";

    const mainStore = useMainStore();
</script>
