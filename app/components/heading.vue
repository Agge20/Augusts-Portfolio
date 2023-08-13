<template>
    <h1 v-if="size === HeadingSize.H1" class="font-gs-bold fluid-9xl" :class="mainStore.theme === 'light' ? 'text-dark-200' : 'text-white'">
        <span
            v-if="highlightAlignment === 'start'"
            class="animate-gradient-shine bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent transition"
        >
            {{ highlightText }}
        </span>
        {{ headingText }}
        <span
            v-if="highlightAlignment === 'end'"
            class="animate-gradient-shine bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent transition"
        >
            {{ highlightText }}
        </span>
    </h1>
    <h2 v-if="size === HeadingSize.H2" class="font-gs-bold fluid-4xl" :class="mainStore.theme === 'light' ? 'text-dark-200' : 'text-white'">
        <span
            v-if="highlightAlignment === 'start'"
            class="animate-gradient-shine bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent transition"
        >
            {{ highlightText }}
        </span>
        {{ headingText }}
        <span
            v-if="highlightAlignment === 'end'"
            class="animate-gradient-shine bg-gradient-to-r from-green-300 via-green-100 to-green-300 bg-clip-text text-transparent transition"
        >
            {{ highlightText }}
        </span>
    </h2>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";

    const mainStore = useMainStore();

    // Import the allowed heading sizes
    import { HeadingSize } from "@/types/HeadingTypes";

    // Import the allowed highlight alignments
    import { HighlightAlignment } from "@/types/HighlightAlignmentTypes";

    interface Props {
        size: HeadingSize;
        headingText: String;
        highlightText: String;
        highlightAlignment: HighlightAlignment;
    }

    defineProps<Props>();
</script>
