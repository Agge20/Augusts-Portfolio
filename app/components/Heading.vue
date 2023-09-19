<template>
    <component :is="size" :class="[defaultClasses, sizeClasses, mainStore.theme === 'light' ? 'text-dark-200' : 'text-white']">
        <span v-if="highlightAlignment === 'start'" class="">
            <span
                class="animate-gradient-shine via-turquoise-100 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent transition"
            >
                {{ highlightText }}
            </span>
            {{ headingText }}
        </span>
        <span v-if="highlightAlignment === 'end'">
            {{ headingText }}
            <span
                class="animate-gradient-shine via-turquoise-100 bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent transition"
            >
                {{ highlightText }}
            </span>
        </span>
    </component>
</template>

<script setup lang="ts">
    interface Props {
        size: HeadingSize;
        headingText: String;
        highlightText: String;
        highlightAlignment: HighlightAlignment;
    }

    const props = defineProps<Props>();

    /* Types */
    import { HeadingSize } from "@/types/HeadingTypes";
    import type { HighlightAlignment } from "@/types/HighlightAlignmentTypes";

    /* Store imports */
    import { useMainStore } from "~/stores/MainStore";

    /* Use the main store */
    const mainStore = useMainStore();

    /* Non-reactive state */

    // Default classes for the heading
    const defaultClasses = ["text-ch-black-200", "font-ws-regular"];

    /* Reactive state */
    const sizeClasses = ref<string>("");

    // Based on the size prop, set the sizeClasses ref value
    switch (props.size) {
        case HeadingSize.H1:
            sizeClasses.value = "text-4xl";
            break;
        case HeadingSize.H2:
            sizeClasses.value = "font-gs-bold fluid-4xl";
            break;
        case HeadingSize.H3:
            sizeClasses.value = "text-xl";
            break;
        case HeadingSize.H4:
            sizeClasses.value = "text-md opacity-75";
            break;
    }
</script>
