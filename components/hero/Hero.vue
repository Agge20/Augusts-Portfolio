<template>
    <div ref="hero" class="flex h-full min-h-[calc(100vh_-_8rem)] w-full flex-col items-center pt-16 sm:flex-row">
        <div class="text-white-100 relative mt-16 flex h-full flex-col items-start justify-start sm:mt-0 lg:w-3/5">
            <HeroHeadingOne id="hello" class="translate-x-[20px]" />
            <HeroHeadingTwo id="my-name-is" />
            <!-- Skills wrapper -->
            <div class="flex flex-row items-center sm:mt-4">
                <HeroHeadingThree id="build-with" />
                <!-- Loop out all the documents -->
                <HeroSkills />
            </div>
        </div>
        <HeroCanvas />
    </div>
</template>

<script setup lang="ts">
    /* Motion one imports */
    import { timeline } from "motion";

    /* Types */
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    // When component is mounted play animation
    onMounted(() => {
        const heroTextSequence: TimelineSegment[] = [
            [
                "#hello",
                {
                    opacity: 1,
                    x: [-20, 0],
                },
                { duration: 1.5 },
            ],
            [
                "#my-name-is",
                {
                    opacity: 1,
                    x: [-20, 0],
                },
                { duration: 1.35 },
            ],
            [
                "#build-with",
                {
                    opacity: 1,
                    x: [-20, 0],
                },
                { duration: 1 },
            ],
            [
                "#tsparticles",
                {
                    opacity: 1,
                },
                { duration: 1 },
            ],
        ];

        // Create timeline
        timeline(heroTextSequence, { delay: 1.25, direction: "normal" });
    });
</script>
