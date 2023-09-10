<template>
    <article class="max-w-3xl">
        <heading :size="HeadingSize.H2" :headingText="headingText" :highlightText="highlightText" :highlightAlignment="highlightAlignment" />
        <p class="mt-2 text-lg" :class="mainStore.theme === 'light' ? 'text-dark-200' : 'text-white'">{{ text }}</p>
    </article>
</template>

<script setup lang="ts">
    interface Props {
        headingText: String;
        highlightText: String;
        highlightAlignment: HighlightAlignment;
        text: String;
    }
    defineProps<Props>();

    /* Types */
    import type { HighlightAlignment } from "@/types/HighlightAlignmentTypes";
    import { HeadingSize } from "@/types/HeadingTypes";

    /* Store imports */
    import { useMainStore } from "~/stores/MainStore";

    // Use the main store
    const mainStore = useMainStore();
</script>
