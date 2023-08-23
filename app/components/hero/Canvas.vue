<template>
    <TresCanvas window-size>
        <TresMesh ref="boxRef" :rotation="[0, 0, 0]">
            <TresOctahedronGeometry :args="[1, 0]" />
            <TresMeshNormalMaterial color="red" />
        </TresMesh>
    </TresCanvas>
</template>

<script setup lang="ts">
    // Refs
    const boxRef = ref();

    const { onLoop } = useRenderLoop();

    onLoop(({ delta, elapsed, clock, dt }) => {
        // I will run at every frame ~ 60FPS (depending of your monitor)
        if (boxRef.value) {
            boxRef.value.rotation.y += delta;
            boxRef.value.rotation.z = elapsed * 0.2;
        }
    });
</script>
