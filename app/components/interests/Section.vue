<template>
  <article class="mb-24">
    <heading :size="HeadingSize.H2" :headingText="'My main'" :highlightText="'interests'" :highlightAlignment="'end'" />
    <div class="mt-8 flex flex-wrap gap-x-8">
      <interests-card v-for="(interest, index) in  interestsData" :key="index" :interest="interest" />
    </div>
  </article>
</template>

<script setup lang="ts">
/* Types */
import { HeadingSize } from "@/types/HeadingTypes";
import type { Interest } from "@/types/Interest";

const { data: interestsData }: { data: Interest[] } = await useAsyncData("interests", () => queryContent("json", "interests").find());

</script>