<template>
    <div>
        <heading ref="myMainInterests" :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
        <div>
            <main-interests-card />
        </div>
    </div>
</template>

<script setup lang="ts">
    // Import the allowed heading sizes
    import { HeadingSize } from "@/types/HeadingTypes";
</script>
