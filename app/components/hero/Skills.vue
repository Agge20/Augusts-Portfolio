<template>
  <div id="skills" class="flex">
    <!-- Loop out all the documents -->
    <hero-skill v-for="(skill, index) in skillsData" :key="index" class="skill" :skill="skill" />
  </div>
</template>

<script setup lang="ts">
/* Vue imports */
import { onUpdated } from "vue";

/* Types */
import type { Skill } from "~/types/Skill";
import { TimelineSegment } from "@motionone/dom/types/timeline/types";
import { timeline } from "motion";

// Fetch all the skills content data
const { data: skillsData }: { data: Skill[] } = await useAsyncData("skills", () => queryContent("json", "skills").find());

// When component is mounted play animation
onUpdated(() => {
  // Get all the skills from the DOM
  const skills: NodeListOf<Element> | null = document.querySelectorAll(".skill");

  // Store the skills in an array
  const skillsArray: Element[] = Array.from(skills);

  // Start animating the skills after 5000ms
  setTimeout(() => {
    // Function to animate a skill
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

      // Create timeline
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
