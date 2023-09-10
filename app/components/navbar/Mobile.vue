<template>
    <div class="min-w-64 bg-dark-200 animate-slide-in-from-right fixed right-0 top-0 z-20 min-h-screen w-1/2 md:hidden">
        <ul id="navbar-mobile" class="flex min-h-screen flex-col items-center justify-center">
            <navbar-mobile-link v-for="link in links" :key="link.scrollToId" :link="link" />
        </ul>
    </div>
</template>

<script setup lang="ts">
    interface NavbarMobileProps {
        links: NavigationLinkType[];
    }

    defineProps<NavbarMobileProps>();

    /* Types */
    import { NavigationLink as NavigationLinkType } from "@/types/NavigationTypes";
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    /* Motion one imports */
    import { timeline } from "motion";

    // When component is mounted
    onMounted(() => {
        const navigationLinks: NodeListOf<HTMLLIElement> = document.querySelectorAll("#navbar li");
        const navigationLinksLength: number = navigationLinks.length;

        // Create timeline segment for each navigation link with extra delay
        const navigationLinksTimeline: TimelineSegment[] = [];

        for (let i = 0; i < navigationLinksLength; i++) {
            navigationLinksTimeline.push([
                `#navbar-mobile li:nth-child(${i + 1})`,
                {
                    opacity: 1,
                    y: 20,
                },
            ]);
        }

        const sequence: TimelineSegment[] = [...navigationLinksTimeline];
        timeline(sequence, { duration: 1 });
    });
</script>
