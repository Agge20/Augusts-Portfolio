<template>
    <header id="header" class="relative z-20 flex h-32 w-full">
        <div class="center flex w-full justify-end">
            <!-- Navigation links -->
            <ul id="navbar" class="hidden items-center md:flex">
                <navigation-link v-for="link in navigationLinks" :key="link.scrollToId" :link="link" />
            </ul>
            <socials />
            <!-- Hamburger -->
            <div class="md:hidden right-4 top-6 fixed">
              <icon name="ci:hamburger-md" size="3.5em" :class="theme === 'light' ? 'text-dark-100' : 'text-white'" />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    // Import the NavigationLink component
    import NavigationLink from "@/components/navbar/NavigationLink.vue";

    // Import the allowed navigation types
    import { NavigationLinks, NavigationText } from "@/types/NavigationTypes";

    // Load motion one
    import { timeline } from "motion";

    // Import types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);

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

    // When component is mounted
    onMounted(() => {
        const navigationLinks: NodeListOf<HTMLLIElement> = document.querySelectorAll("#navbar li");
        const navigationLinksLength: number = navigationLinks.length;

        // Create timeline segment for each navigation link with extra delay
        const navigationLinksTimeline: TimelineSegment[] = [];

        for (let i = 0; i < navigationLinksLength; i++) {
            navigationLinksTimeline.push([
                `#navbar li:nth-child(${i + 1})`,
                {
                    opacity: 1,
                    x: 20,
                },
            ]);
        }

        const sequence: TimelineSegment[] = [
            [
                "#navbar",
                {
                    x: -20,
                },
            ],
            ...navigationLinksTimeline,
        ];
        timeline(sequence, { duration: 1 });
    });
</script>
