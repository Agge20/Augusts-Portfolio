<template>
    <!-- Dark mode particles -->
    <particles
        v-if="theme === 'dark'"
        :particlesInit="particlesInit"
        :options="particlesTSDarkModeConfig"
        :class="particlesHasBeenAnimated ? 'opacity-100' : 'opacity-0'"
        id="tsparticles"
        class="animate-fade-in fixed left-0 top-0 min-h-screen w-full"
    />
    <!-- Light mode particles -->
    <particles
        v-else
        :particlesInit="particlesInit"
        :options="particlesTSLightModeConfig"
        :class="particlesHasBeenAnimated ? 'opacity-100' : 'opacity-0'"
        id="tsparticles"
        class="animate-fade-in absolute left-0 top-0 h-screen w-full"
    />

    <div class="text-white-100 relative mt-16 flex h-[calc(100vh_-_8rem)] w-full flex-col items-start justify-start sm:mt-0 sm:justify-center">
        <!-- Use unique "hero" headings here instead of headings-component-->
        <hero-header-one id="hello" class="translate-x-[20px]" />
        <hero-header-two id="my-name-is" />
        <!-- Skills wrapper -->
        <div class="mt-4 flex min-h-[112px] flex-row items-center">
            <hero-header-three id="build-with" />
            <div id="skills">
                <!-- Loop out all the documents -->
                <hero-skills />
            </div>
        </div>
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

    // Motion one
    import { timeline } from "motion";

    // Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);

    // Component state
    const particlesHasBeenAnimated = ref<boolean>(false);

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

        particlesHasBeenAnimated.value = true;
    });
</script>
