<template>
    <header id="header" class="content fixed top-8 flex h-32 w-full">
        <div class="center flex w-full justify-end">
            <!-- Navigation links -->
            <ul id="navbar" class="flex items-center">
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

    // Load motion one
    import { timeline } from "motion";

    // Import types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

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

        console.log("navigationLinksTimeline", navigationLinksTimeline);

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
