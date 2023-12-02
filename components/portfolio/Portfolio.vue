<template>
  <section class="pt-content max-w-4xl">
    <Heading :size="'h2'" :headingText="'Previous'" :highlightText="'projects'" :highlightAlignment="'end'" />
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <PortfolioCard v-for="(project, index) in projectsData" :project="project" :key="index" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from "@/types/interfaces/Project";


// The fetched data is mapped to the `Project` type.
const projectsData = ref<Project[]>();

/**
* Fetches Nuxt Content JSON-objects from the "Projects" directory.
*
* This function uses the `useAsyncData` hook to fetch data from the "Projects" endpoint.
* The data is then mapped to the `Project` type.
*
* @returns A reactive data object with the fetched JSON-data.
*/
const { data } = await useAsyncData("projects", async () => {
  const result = await queryContent("json", "projects").find();
  return result.map((item: any): Project => ({
    url: item.url,
    imageAlt: item.imageAlt,
    imagePath: item.imagePath,
    title: item.title,
    text: item.text,
    technologies: item.technologies,
  }));
});

watchEffect(() => {
  // Watch for changes in the `data` object
  projectsData.value = data.value ?? [];
})


</script>