<template>
  <div class="w-1/3 h-full">
    <TresCanvas alpha power-preference="high-performance">
      <TresPerspectiveCamera  :position="[-10, 0, -20]" :look-at="[0, 4, -2]" />
        <Suspense>
            <primitive ref="modelRef" :object="model" :rotation="[-90, -260, 0]" :scale="modelScale" />
        </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
    interface Props {
      scaleUp: boolean;
    }

    const props = defineProps<Props>();

    // Tresjs imports
    import { useLoader } from "@tresjs/core";
    import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
    import { MeshBasicMaterial, Texture  } from 'three';

    // Refs
    const modelRef = ref();

    // Tresjs onLoop function
    const { onLoop } = useRenderLoop();

    // Load the model
    const { scene: model, nodes } = await useLoader(GLTFLoader, "/models/waving-hand/Waving_Hand_Emoji.gltf");

    // Load the texture
    const handTexture: Texture = await useTexture(['/models/waving-hand/textures/baseColor.jpg'])
    // Flip the texture the right way
    handTexture.flipY = false

    // Create a new material with the texture
    const handMaterial = new MeshBasicMaterial({
      map: handTexture
    })
    // Apply the material to the model
    nodes.Waving_Hand.material = handMaterial;

    // Set the model scale
    const modelScale = ref<number>(0)

    // This code sets up an interval to scale modelScale.value based on props.scaleUp.
    // It increments by 0.01 if props.scaleUp is true, or decrements by 0.01 if false.
    // The interval stops when modelScale.value reaches 0.75 or 0, depending on props.scaleUp.
    onMounted(() => {
      watchEffect(() => {
        if (props.scaleUp || !props.scaleUp) {
          const changeModelScaleInterval = setInterval(() => {
            const increment = props.scaleUp ? 0.01 : -0.01;
            modelScale.value += increment;
            if ((props.scaleUp && modelScale.value >= 1) || (!props.scaleUp && modelScale.value <= 0)) {
              clearInterval(changeModelScaleInterval);
            }
          }, 1.2);
        }
      })
    })


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

