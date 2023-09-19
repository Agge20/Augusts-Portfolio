<template>
    <div>
        <heading ref="myMainInterests" :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
        <div class="mt-8 flex flex-wrap gap-x-8">
            <main-interests-card v-for="(mainInterest, index) in mainInterestsData" />
        </div>
    </div>
</template>

<script setup lang="ts">
    /* Types */
    import { HeadingSize } from "@/types/HeadingTypes";
    import type { MainInterest } from "@/types/MainInterest";

    // Fetch all the skills content data
    const { data: mainInterestsData }: { data: MainInterest[] } = await useAsyncData("home", () => queryContent("/json/main-interests").find());
</script>
