<template>
    <ul class="bg-white-100 animate-fade-in flex gap-3 self-center rounded-full px-4 py-4">
        <li class="rounded-md transition-all hover:scale-105">
            <a :href="socialUrls.linkedin" target="_blank">
                <icon name="logos:linkedin-icon" size="2.5em" class="rounded-md" />
            </a>
        </li>
        <li class="rounded-md bg-black transition-all hover:scale-105">
            <a :href="socialUrls.github" target="_blank">
                <icon name="uil:github" size="2.5em" class="text-white" />
            </a>
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { socialUrls } from "@/types/SocialUrls";
</script>
