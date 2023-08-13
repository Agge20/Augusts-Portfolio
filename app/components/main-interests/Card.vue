<template>
    <div class="relative h-80 w-80 cursor-pointer">
        <div
            ref="showCardTextRef"
            @click="showCardText = true"
            class="relative z-20 h-full w-full rounded-xl bg-white shadow-2xl transition-transform"
        >
            <main-interests-card-heading :text="'Movies'" />
        </div>
        <div
            @click="(showCardTitle = true), (showCardText = false)"
            class="relative h-full w-full -translate-y-[95%] rounded-xl bg-gradient-to-r from-green-100 via-green-200 to-green-300"
        >
            <h3>Movies</h3>
            <p>Lorem ispum dolor maximums dolor maxos</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const showCardText = ref<boolean>(false);
    const showCardTitle = ref<boolean>(false);
    const showCardTextRef = ref<HTMLElement | null>(null);

    // Motion one
    import { timeline } from "motion";

    // Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    watchEffect(() => {
        // When showCardText is true play animation
        if (showCardText.value) {
            // Timeline sequence for the show text card animation
            const showCardTextSequence: TimelineSegment[] = [
                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        y: ["-5%", "105%"],
                        rotateX: [0, -45],
                    },
                    {
                        duration: 0.5,
                    },
                ],

                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        zIndex: 0,
                    },
                    {
                        duration: 0.1,
                    },
                ],

                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        y: ["100%", 0],
                        rotateX: 0,
                    },
                    {
                        duration: 0.35,
                    },
                ],
            ];

            // Create timeline
            timeline(showCardTextSequence, { direction: "normal" });
        }
    });
</script>
