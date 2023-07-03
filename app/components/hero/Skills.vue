<template>
    <div id="skills" class="flex">
        <!-- Loop out all the documents -->
        <hero-skill v-for="(skill, index) in skillsData" :key="index" class="skill">
            <content-renderer class="relative text-center" :value="skill" />
        </hero-skill>
    </div>
</template>

<script setup lang="ts">
    // Vue imports
    import { onUpdated } from "vue";
    // Fetch all the skills content data
    // @ts-ignore
    const { data: skillsData } = await useAsyncData("home", () => queryContent("/skills").find());

    // Motion One types
    import { TimelineSegment } from "@motionone/dom/types/timeline/types";

    import { timeline } from "motion";

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
