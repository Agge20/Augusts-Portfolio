<template>
  <article class="spacing-b max-w-4xl">
    <heading :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
    <div class="flex flex-col gap-8 lg:flex-row">
      <InterestsCard v-for="(interest, index) in  interestsData" :key="index" :interest="interest" />
    </div>
  </article>
</template>

<script setup lang="ts">
/* Types */
import { HeadingSize } from "@/types/enums/HeadingTypes";
import type { Interest } from "@/types/interfaces/Interest";

// The fetched data is mapped to the `Interest` type.
const interestsData = ref<Interest[]>();

/**
* Fetches Nuxt Content JSON-objects from the "interests" directory.
*
* This function uses the `useAsyncData` hook to fetch data from the "interests" endpoint.
* The data is then mapped to the `Interest` type.
*
* @returns A reactive data object with the fetched JSON-data.
*/
const { data } = await useAsyncData("interests", async () => {
  const result = await queryContent("json", "interests").find();
  return result.map((item: any): Interest => ({
    title: item.title,
    imagePath: item.imagePath,
    text: item.text,
  }));
});

watchEffect(() => {
  // Watch for changes in the `data` object
  interestsData.value = data.value ?? [];
})
</script>