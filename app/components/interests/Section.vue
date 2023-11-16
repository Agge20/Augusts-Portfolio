<template>
  <article class="mb-24 max-w-4xl">
    <heading :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
    <div class="mt-8 flex flex-col gap-4 md:gap-8 lg:flex-row">
      <interests-card v-for="(interest, index) in  interestsData" :key="index" :title="interest.title"
        :imagePath="interest.imagePath" :text="interest.text" />
    </div>
  </article>
</template>

<script setup lang="ts">
/* Types */
import { HeadingSize } from "@/types/HeadingTypes";
import type { Interest } from "@/types/Interest";

const { data: interestsData }: { data: Interest[] } = await useAsyncData("interests", () => queryContent("json", "interests").find());
</script>