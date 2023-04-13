<template>
    <particles id="tsparticles" :particlesInit="particlesInit" :options="particlesTSConfig" class="animate-fade-in" />
    <h1 id="scene-1">Hello</h1>
    <h2 id="scene-2">My name is <span>August</span></h2>
    <h3 id="scene-3">I build stuff with:</h3>
</template>

<script setup lang="ts">
    // Import particleTS config
    import { particlesTSConfig } from "@/config/particlesTS";
    import { loadFull } from "tsparticles";

    // Load motion one
    import { animate, timeline } from "motion";

    // Import types
    import { TimelineDefinition, TimelineSegment } from "@motionone/dom/types/timeline/types";

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
</script>
