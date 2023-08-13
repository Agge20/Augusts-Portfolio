<template>
    <div
        class="hidden h-28 w-28 flex-col justify-center text-center opacity-0 first:inline-block"
        :class="[theme === 'light' ? 'text-dark-200' : 'text-white']"
    >
        <img class="w-full rounded-lg md:h-28 md:w-28" :src="skill.image_path" :alt="skill.image_alt" />
        <h4 class="font-gs-medium absolute w-full text-xl">{{ skill.title }}</h4>
    </div>
</template>

<script setup lang="ts">
    // Store imports
    import { useMainStore } from "~/stores/MainStore";
    import { storeToRefs } from "pinia";

    // Stores
    const mainStore = useMainStore();
    const { theme } = storeToRefs(mainStore);

    // Import the Skill type
    import { Skill } from "~/types/Skill";

    interface Props {
        skill: Skill;
    }

    defineProps<Props>();
</script>
~/types/Skill
