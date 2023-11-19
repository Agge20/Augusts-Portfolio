<template>
  <HighlightedContainer :type="HighlightedContainerType.Article">

    <Heading :size="HeadingSize.H2" :headingText="headingText" :highlightText="highlightText"
      :highlightAlignment="highlightAlignment" />
    <div class="text-lg" v-html="text"></div>
  </HighlightedContainer>
</template>

<script setup lang="ts">
interface Props {
  headingText: String;
  highlightText: String;
  highlightAlignment: HighlightAlignment;
  text: String;
}
defineProps<Props>();

/* Types */
import type { HighlightAlignment } from "@/types/HighlightAlignmentTypes";
import { HeadingSize } from "@/types/enums/HeadingTypes";
import { HighlightedContainerType } from "@/types/enums/HighlightedContainerType";
</script>