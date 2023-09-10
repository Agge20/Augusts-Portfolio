<template>
    <div
        class="hidden flex-col justify-center text-center opacity-0 first:inline-block"
        :class="[theme === 'light' ? 'text-dark-200' : 'text-white']"
    >
        <img class="h-16 w-16 rounded-lg sm:h-20 sm:w-20" :src="skill.image_path" :alt="skill.image_alt" />
        <h4 class="font-gs-medium text-md absolute w-full sm:text-xl">{{ skill.title }}</h4>
    </div>
</template>

<script setup lang="ts">
    interface Props {
        skill: Skill;
    }

    defineProps<Props>();

    /* Types */
    import type { Skill } from "~/types/Skill";
    /* Store imports */
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Use the main store
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);
</script>
