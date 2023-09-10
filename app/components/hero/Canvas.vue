<template>
    <div class="animate-scale-in relative right-0 hidden min-h-[510px] w-1/2 lg:right-0 lg:inline-block lg:w-2/5">
        <TresCanvas alpha power-preference="high-performance">
            <TresPerspectiveCamera :position="[-11, 0, -20]" :look-at="[0, 0, 0]" />
            <Suspense>
                <primitive ref="modelRef" :position="[0, modelScaleYPosition]" :object="model" :rotation="[-90, -260, 0]" :scale="modelScale" />
            </Suspense>
        </TresCanvas>
    </div>
</template>

<script setup lang="ts">
    /* Tresjs imports */
    import { useLoader } from "@tresjs/core";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
    import { MeshBasicMaterial, Texture } from "three";

    // Refs
    const modelRef = ref();

    // Tresjs onLoop function
    const { onLoop } = useRenderLoop();

    // Load the model
    const { scene: model, nodes } = await useLoader(GLTFLoader, "/models/waving-hand/Waving_Hand_Emoji.gltf");

    // Load the texture
    const handTexture: Texture = await useTexture(["/models/waving-hand/textures/baseColor.jpg"]);
    // Flip the texture the right way
    handTexture.flipY = false;

    // Create a new material with the texture
    const handMaterial = new MeshBasicMaterial({
        map: handTexture,
    });
    // Apply the material to the model
    nodes.Waving_Hand.material = handMaterial;

    // Model properties
    const modelScale = ref<number>(1.1);
    const modelScaleYPosition = ref<number>(-3);

    // Declare a variable to hold the event listener function
    let windowResizeEventListener: EventListener | null = null;

    // Add the event listener and store it in the variable
    windowResizeEventListener = () => {
        if (window.innerWidth < 1280) {
            modelScale.value = 0.75;
            modelScaleYPosition.value = 3;
            console.log("if ran...");
        } else {
            modelScale.value = 1.1;
            modelScaleYPosition.value = -2;
            console.log("else ran...");
        }
    };

    window.addEventListener("resize", windowResizeEventListener);

    // Remove the event listener when the component is unmounted
    onUnmounted(() => {
        if (windowResizeEventListener) {
            window.removeEventListener("resize", windowResizeEventListener);
        }
    });

    onLoop(({ delta, elapsed, clock }) => {
        if (modelRef.value) {
            // Adjust the wave frequency
            const waveFrequency = 4;
            // Adjust the wave amplitude
            const waveAmplitude = 0.15;

            // Calculate the wave angle based on time
            const waveAngle = Math.sin(elapsed * waveFrequency) * waveAmplitude;

            // Set the object's rotation around the Z-axis to create the wave effect
            modelRef.value.rotation.z = waveAngle;

            modelRef.value.rotation.x = Math.sin(elapsed * 0.5) * 0.1;
        }
    });
</script>
