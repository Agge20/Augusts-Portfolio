<template>
    <main class="bg-ap-dark-100 min-h-screen">
        <navbar />
        <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesTSConfig" />
    </main>
</template>

<script setup lang="ts">
    // Import particleTS config
    import { particlesTSConfig } from "@/config/particlesTS";

    import { loadFull } from "tsparticles";

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };
</script>
