<template>
    <ul :class="theme === 'light' ? 'bg-dark-200' : 'bg-white'" class="items-center animate-fade-in gap-3 self-center rounded-full px-4 py-3 z-20 hidden md:flex">
        <li class="rounded-md transition-all hover:scale-105">
            <a :href="socialUrls.linkedin" target="_blank" class="h-full inline-block relative">
                <span class="bg-white absolute top-1 left-1 inline-block w-4/5 h-4/5"></span>
                <icon name="logos:linkedin-icon" size="2.5em" :class="theme === 'light' ? '' : 'text-dark-200'" class="rounded-md relative" />
            </a>
        </li>
        <li class="rounded-md bg-black transition-all hover:scale-105">
            <a :href="socialUrls.github" target="_blank">
                <icon name="uil:github" size="2.85em" :class="theme === 'light' ? 'text-white' : 'text-dark-200'" />
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    // Import types
    import { socialUrls } from "@/types/SocialUrls";

    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
</script>
