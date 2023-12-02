<template>
  <HighlightedContainer :type="HighlightedContainerType.Article">
    <Heading :size="'h2'" :headingText="headingText" :highlightText="highlightText"
      :highlightAlignment="highlightAlignment" />
    <div class="text-lg" v-html="text"></div>
  </HighlightedContainer>
</template>

<script setup lang="ts">
interface Props {
  headingText: string;
  highlightText: string;
  highlightAlignment: HighlightAlignment;
  text: string;
}
defineProps<Props>();

/* Types */
import type { HighlightAlignment } from "@/types/HighlightAlignmentTypes";
import { HighlightedContainerType } from "@/types/enums/HighlightedContainerType";
</script>