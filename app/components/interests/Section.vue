<template>
  <article class="mb-24 max-w-4xl">
    <heading :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
    <div class="mt-8 flex flex-row-reverse gap-x-8">
      <interests-card v-for="(interest, index) in  interestsData" :key="index" :title="interest.title"
        :imagePath="interest.image_path" />
    </div>
  </article>
</template>

<script setup lang="ts">
/* Types */
import { HeadingSize } from "@/types/HeadingTypes";
import type { Interest } from "@/types/Interest";

const { data: interestsData }: { data: Interest[] } = await useAsyncData("interests", () => queryContent("json", "interests").find());


console.log("interestsData: ", interestsData);
</script>