<template>
  <div class="flex">
    <!-- Loop out all the documents -->
    <HeroSkill v-for="(skill, index) in skills" :key="index" class="skill" :skill="skill" />
  </div>
</template>

<script setup lang="ts">
/* Types */
import { TimelineSegment } from "@motionone/dom/types/timeline/types";
import { timeline } from "motion";

/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();

// Import the theme-state from the main store and destructure it into a ref
const { skills } = mainStore;

// When component is mounted play animation
onMounted(() => {

  // Get all the skills from the DOM
  const skills: NodeListOf<Element> | null = document.querySelectorAll(".skill");

  // Store the skills in an array
  const skillsArray: Element[] = Array.from(skills);

  // Start animating the skills after 5000ms
  setTimeout(() => {

    /**
 * Animates a skill element in the `skillsArray`.
 *
 * This function takes an index as an argument, retrieves the corresponding skill from the `skillsArray`,
 * and applies a sequence of animations to it. It first hides all skills, then reveals the selected skill
 * and applies a sequence of transformations (opacity, scale, rotation) over time.
 *
 * After the animation sequence is completed, it schedules the next skill to be animated after a delay of 3000ms.
 *
 * @param index - The index of the skill in the `skillsArray` to animate.
 */
    const animateSkill = (index: number) => {
      if (!skillsArray) return;
      const skill = skillsArray[index] as HTMLDivElement;

      for (let i = 0; i < skillsArray.length; i++) {
        const skillToRemove = skillsArray[i] as HTMLDivElement;
        skillToRemove.classList.add("hidden");
        skillToRemove.classList.remove("first:inline-block");
      }

      skill.classList.remove("hidden");

      const skillSequence: TimelineSegment[] = [
        [
          skill,
          {
            opacity: [0, 1],
            scale: [0, 1],
            rotate: [180, 0],
          },
          { duration: 0.5 },
        ],
        [
          skill,
          {
            opacity: 1,
            scale: 1,
          },
          { duration: 2 },
        ],
        [
          skill,
          {
            opacity: 0,
            rotate: -180,
            scale: 0,
          },
          { duration: 0.5 },
        ],
      ];

      timeline(skillSequence, { direction: "normal" });

      // Increment index or reset to 0
      index = (index + 1) % skillsArray.length;

      // Animate the next skill after 3000ms
      setTimeout(() => {
        animateSkill(index);
      }, 3000);
    };

    // Start the loop by animating the first skill
    animateSkill(0);
  }, 5000);
});
</script>
