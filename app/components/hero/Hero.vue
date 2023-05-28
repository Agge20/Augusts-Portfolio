<template>
    <particles
        v-if="theme === 'dark'"
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesTSDarkModeConfig"
        :class="particlesHasBeenAnimated ? 'opacity-100' : 'opacity-0'"
        class="animate-fade-in absolute left-0 top-0 h-screen w-full"
    />

    <particles
        v-else
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesTSLightModeConfig"
        :class="particlesHasBeenAnimated ? 'opacity-100' : 'opacity-0'"
        class="animate-fade-in absolute left-0 top-0 h-screen w-full"
    />

    <div class="text-white-100 relative z-20 flex h-[calc(100vh_-_8rem)] w-full flex-col items-start justify-center border-2">
        <!-- Use unique "hero" headings here instead of headings-component-->
        <hero-header-one id="hello" />
        <hero-header-two id="my-name-is" />
        <hero-header-three id="build-with" />
    </div>
</template>

<script setup lang="ts">
    // Import particleTS config
    import { particlesTSLightModeConfig } from "~/config/particlesTSLightMode";
    import { particlesTSDarkModeConfig } from "~/config/particlesTSDarkMode";
    import Particles from "@/node_modules/vue3-particles/src/components/Particles.vue";

    import { loadFull } from "tsparticles";

    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Load motion one
    import { timeline } from "motion";

    // Import Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    // Use the main store
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);

    // State
    const particlesHasBeenAnimated = ref(false);

    // Components
    import HeroHeaderOne from "./HeroHeaderOne.vue";
    import HeroHeaderTwo from "./HeroHeaderTwo.vue";
    import HeroHeaderThree from "./HeroHeaderThree.vue";

    // When component is mounted play animation
    onMounted(() => {
        const sequence: TimelineSegment[] = [
            [
                "#hello",
                {
                    opacity: 1,
                    x: 20,
                },
                { duration: 1.5 },
            ],

            [
                "#my-name-is",
                {
                    opacity: 1,
                    x: 20,
                },
                { duration: 1.35 },
            ],

            [
                "#build-with",
                {
                    opacity: 1,
                    x: 20,
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
        timeline(sequence, { delay: 1.25, direction: "normal" });

        particlesHasBeenAnimated.value = true;
    });
</script>
