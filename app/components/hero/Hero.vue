<template>
  <div class="h-[calc(100vh_-_8rem)] w-full flex flex-row-reverse items-start">
    <hero-canvas :scale-up="heroIsVisible ? true : false" />
    <div ref="hero" class="text-white-100 relative mt-16 flex h-full w-2/3 flex-col items-start justify-start sm:mt-0 sm:justify-center">
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
  </div>
</template>

<script setup lang="ts">
    // Motion one
    import { timeline } from "motion";

    // Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    // Component state
    const particlesHasBeenAnimated = ref<boolean>(false);

    import { useElementVisibility } from '@vueuse/core'
    const hero = ref()
    const heroIsVisible = useElementVisibility(hero)

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
