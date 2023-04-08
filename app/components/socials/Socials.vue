<template>
  <ul class="px-4 py-4 bg-ap-white-100 rounded-full flex gap-3">
    <li class="rounded-md transition-all hover:scale-105">
      <a :href="socialUrls.linkedin" target="_blank">
        <icon name="logos:linkedin-icon" size="2.5em" class="rounded-md "/>
      </a>
    </li>
    <li class="bg-black rounded-md transition-all hover:scale-105">
      <a :href="socialUrls.github" target="_blank">
        <icon name="uil:github" size="2.5em" class="text-white"/>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { socialUrls } from "@/types/SocialUrls";
</script>