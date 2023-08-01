<template>
    <spinner v-if="!themeHasBeenLoaded" />
    <main v-if="themeHasBeenLoaded" :class="theme === 'light' ? 'bg-white' : 'bg-dark-100'" class="min-h-screen overflow-x-hidden transition">
        <!-- Center content -->
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
            <navbar />
            <hero />
            <change-light-theme />
        </div>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
            <text-and-heading
                v-if="aboutMeTextData"
                :headingText="aboutMeTextData[0].heading_text"
                :highlightText="aboutMeTextData[0].highlight_text"
                :highlightAlignment="'start'"
                :text="aboutMeTextData[0].text"
            />
        </div>
    </main>
</template>

<script setup lang="ts">
    // Import the main store
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Use the store
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
    const themeHasBeenLoaded = ref(false);

    // On mounted
    onMounted(() => {
        // Check the user theme preference
        mainStore.checkUserThemePreference();
        themeHasBeenLoaded.value = true;
    });

    // Fetch the about me text json-data
    const { data: aboutMeTextData } = await useFetch('/api/_content/query?_params={"where":{"_path":"/json/text/about-me"}}');
</script>
