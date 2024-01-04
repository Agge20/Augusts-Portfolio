<template>
  <HighlightedContainer :type="HighlightedContainerType.Section">
    <Heading :size="'h2'" :highlightText="'Contact'" :headingText="'me'" :highlightAlignment="'start'" />
    <p class="text-lg">The best way to contact me is through email or LinkedIn. You can find my relevant contact
      information below.
    </p>
    <div class="flex flex-col gap-4 mt-8 text-lg">
      <a href="mailto:augustraro112@hotmail.com">
        <icon name="uil:postcard" size="1.5em" class="mr-1" /> augustraro112@hotmail.com
      </a>
      <a href="https://www.linkedin.com/in/august-rasmussen-ronnle/" class="flex items-center">
        <div class="relative inline-block max-w-[1.55rem] mr-3">
          <span class="absolute left-1 top-1 inline-block h-4/5 w-4/5 bg-white"></span>
          <icon name="logos:linkedin-icon" size="1.5em" class="relative rounded-md" />
        </div>
        LinkedIn
      </a>
    </div>
  </HighlightedContainer>
</template>

<script setup lang="ts">
/* Types */
import { HighlightedContainerType } from "@/types/enums/HighlightedContainerType";
</script>