<template>
    <particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :options="particlesTSLightModeConfig"
        class="animate-fade-in absolute top-0 h-screen w-full"
    />
    <div class="text-white-100 z-20 flex h-screen w-full flex-col items-center justify-center">
        <heading :size="HeadingSize.H1" :text="'Hello'" :color="mainStore.theme === 'light' ? 'text-dark-100' : 'text-white'" />
        <h2 id="my-name-is">My name is <span>August</span></h2>
        <h3 id="build-with">I build stuff with:</h3>
    </div>
</template>

<script setup lang="ts">
    // Import particleTS config
    import { particlesTSLightModeConfig } from "~/config/particlesTSLightMode";
    import { particlesTSDarkModeConfig } from "~/config/particlesTSDarkMode";

    import { loadFull } from "tsparticles";

    // Store imports
    import { useMainStore } from "~/stores/MainStore";

    // Load motion one
    import { timeline } from "motion";

    // Import Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    // Import Types
    import { HeadingSize } from "@/types/HeadingTypes";

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    // When component is mounted
    onMounted(() => {
        const hello: TimelineSegment = [
            "#scene-1",
            {
                opacity: 1,
            },
            { duration: 4 },
        ];

        // Create timeline
        timeline([hello], { duration: 1 });
    });

    // Use the main store
    const mainStore = useMainStore();

    console.log(mainStore.theme);
</script>
