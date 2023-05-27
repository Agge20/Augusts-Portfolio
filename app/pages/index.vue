<template>
    <main class="dark:bg-dark-100 min-h-screen">
        <navbar />
        <hero />
    </main>
</template>

<script setup lang="ts">
    // Import the main store
    import { useMainStore } from "~/stores/MainStore";

    // Use the store
    const mainStore = useMainStore();

    // On mounted
    onMounted(() => {
        // Check the user theme preference
        mainStore.checkUserThemePreference();
    });
</script>
