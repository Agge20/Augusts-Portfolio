<template>
    <h1 :class="textColor">{{ text }}</h1>
</template>

<script setup lang="ts">
    // Import the allowed heading sizes
    import { HeadingSize } from "@/types/HeadingTypes";

    interface Props {
        size: HeadingSize;
        text: string;
        color: "text-white" | "text-dark-100" | "text-dark-200" | "text-green-100";
    }

    const props = defineProps<Props>();

    // Create the computed property
    const textColor = props.color;
</script>
