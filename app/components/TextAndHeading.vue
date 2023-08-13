<template>
    <article class="max-w-3xl">
        <heading :size="HeadingSize.H2" :headingText="headingText" :highlightText="highlightText" :highlightAlignment="highlightAlignment" />
        <p class="mt-2 text-lg" :class="mainStore.theme === 'light' ? 'text-dark-200' : 'text-white'">{{ text }}</p>
        {{ headingText }}
    </article>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";

    // Use the main store
    const mainStore = useMainStore();

    // Import the allowed heading sizes
    import { HeadingSize } from "@/types/HeadingTypes";

    // Import the allowed highlight alignments
    import { HighlightAlignment } from "@/types/HighlightAlignmentTypes";

    // Interface for the prop data
    interface Props {
        headingText: String;
        highlightText: String;
        highlightAlignment: HighlightAlignment;
        text: String;
    }
    defineProps<Props>();
</script>
