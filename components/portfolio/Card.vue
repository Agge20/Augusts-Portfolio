<template>
  <a :href="project.url" target="_blank" class="w-full">
    <article class="prose bg-dark-300 p-4 rounded-lg cursor-pointer transition-all hover:scale-105">
      <figure class="relative">
        <img :src="project.imagePath" :alt="project.imageAlt" class="rounded-lg">
        <figcaption
          class="flex items-center absolute bottom-0 right-0 p-4 bg-gradient-to-tr from-turquoise-100 via-blue-100 to-purple-100 font-semibold text-dark-300 text-2xl rounded-tl-lg">
          Visit project
          <icon class="ml-1" name="uil:external-link-alt" size="1.1em" />
        </figcaption>
      </figure>
      <div>
        <h3 class="text-3xl text-white  font-medium mt-[0.6em]">{{ project.title }}</h3>
        <p class="text-white font-normal">
          {{ project.text }}
        </p>
        <ul class="flex flex-wrap pl-0 text-white ">
          <li v-for="technology in project.technologies" class="mx-4 my-1 marker:text-purple-200">{{ technology }}</li>

        </ul>
      </div>
    </article>
  </a>
</template>

<script setup lang="ts">
/* Types */
import type { Project } from "@/types/interfaces/Project";


interface Props {
  project: Project;
}

defineProps<Props>();
</script>