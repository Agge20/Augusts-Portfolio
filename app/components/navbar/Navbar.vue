<template>
    <header class="content fixed top-8 flex h-32 w-full items-center">
        <div class="center flex w-full justify-end">
            <!-- Navigation links -->
            <ul class="flex items-center">
                <navigation-link v-for="link in navigationLinks" :key="link.scrollToId" :link="link" />
            </ul>
            <socials />
        </div>
    </header>
</template>

<script lang="ts" setup>
    // Import the NavigationLink component
    import NavigationLink from "@/components/navbar/NavigationLink.vue";

    // Import the allowed navigation types
    import { NavigationLinks, NavigationText } from "@/types/NavigationTypes";

    // Create a ref to the navigation links
    const navigationLinks = ref<NavigationLinks>([
        {
            text: NavigationText.AboutMe,
            scrollToId: "about-me",
        },
        {
            text: NavigationText.Skills,
            scrollToId: "skills",
        },
        {
            text: NavigationText.Portfolio,
            scrollToId: "portfolio",
        },
        {
            text: NavigationText.Contact,
            scrollToId: "contact",
        },
    ]);
</script>
