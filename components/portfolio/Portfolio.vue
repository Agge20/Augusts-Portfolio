<template>
  <section class="pt-content max-w-4xl">
    <Heading :size="'h2'" :headingText="'Previous'" :highlightText="'projects'" :highlightAlignment="'end'" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
      <PortfolioCard v-for="(project, index) in projectsData" :project="project" :key="index" />
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex gap-x-4">
      <PortfolioPaginationButton @click="paginationAmount -= 2" :direction="'backwards'" :text="'Go back'" />
      <PortfolioPaginationButton @click=" paginationAmount += 2" :direction="'forward'" :text="'View more'" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Project } from "@/types/interfaces/Project";


/* State */
const paginationAmount = ref<number>(0)

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
  const result = await queryContent("json", "projects").skip(paginationAmount.value).limit(2).find();
  return result.map((item: any): Project => ({
    url: item.url,
    imageAlt: item.imageAlt,
    imagePath: item.imagePath,
    title: item.title,
    text: item.text,
    technologies: item.technologies,
  }));
}, {
  watch: [paginationAmount] // Watch for changes in the `paginationAmount` variable
});

watchEffect(() => {
  // Watch for changes in the `data` object
  projectsData.value = data.value ?? [];

  if (data.value?.length === 0 && paginationAmount.value > 0) {
    paginationAmount.value = 0
  }
})


</script>