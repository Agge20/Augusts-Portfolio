<template>
    <div class="relative h-80 w-80 cursor-pointer">
        <div
            ref="showCardTextRef"
            @click="toggleCard"
            class="relative z-20 h-full w-full rounded-xl bg-white shadow-2xl transition-all hover:scale-105"
        >
            <main-interests-card-heading :text="'Movies'" />
        </div>
        <div
            @click="toggleCard"
            class="relative h-full w-full -translate-y-[95%] rounded-xl bg-gradient-to-r from-purple-100 via-purple-200 to-blue-100"
        >
            <h3>Movies</h3>
            <p>Lorem ispum dolor maximums dolor maxos</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    const showCardText = ref<boolean>(false);
    const showCardTextRef = ref<HTMLElement | null>(null);
    const toggleCardAnimationComplete = ref<boolean>(true);

    // Motion one
    import { timeline } from "motion";

    // Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    /**
     * Toggles the animation to show/hide card text.
     *
     * This function animates the card text's appearance and disappearance using a timeline sequence.
     * It sets the animation state to `toggleCardAnimationComplete` to prevent simultaneous animations.
     *
     * @remarks
     * The animation consists of three segments:
     * 1. Slide the card text in and rotate it slightly.
     * 2. Adjust the z-index to control visibility.
     * 3. Slide the card text out and reset its rotation.
     */
    const toggleCard = () => {
        if (toggleCardAnimationComplete.value) {
            toggleCardAnimationComplete.value = false;

            showCardText.value = !showCardText.value;
            // Generate either true of false
            const randomBoolean = Math.random() < 0.5;

            // Timeline sequence for the show text card animation
            const showCardTextSequence: TimelineSegment[] = [
                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        y: ["-5%", "125%"],
                        rotateZ: [0, randomBoolean ? 10 : -10],
                    },
                    {
                        duration: 0.55,
                    },
                ],

                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        zIndex: showCardText.value ? 0 : 1,
                    },
                    {
                        duration: 0.15,
                    },
                ],

                [
                    // @ts-ignore
                    showCardTextRef.value,
                    {
                        y: ["100%", 0],
                        rotateZ: 0,
                    },
                    {
                        duration: 0.8,
                    },
                ],
            ];

            // Create timeline
            timeline(showCardTextSequence, { direction: "normal" });

            setTimeout(() => {
                toggleCardAnimationComplete.value = true;
            }, 1500);
        }
    };
</script>
