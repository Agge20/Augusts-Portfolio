<template>
  <a :href="project.url" target="_blank"
    class="group rounded-lg w-full cursor-pointer transition-all flex flex-col justify-between bg-dark-300 p-4 hover:scale-105">
    <article class="prose ">
      <figure class="relative">
        <img :src="project.imagePath" :alt="project.imageAlt" class="rounded-lg">
        <figcaption
          class="flex items-center absolute bottom-0 right-0 p-4 bg-gradient-to-tr transition from-turquoise-100 via-blue-100 to-purple-100 font-semibold text-dark-300 text-base  rounded-tl-lg group-hover:text-white sm:text-md">
          Visit {{ project.title }}
          <icon class="ml-1 min-w-6" name="uil:external-link-alt" size="1.5rem" />
        </figcaption>
      </figure>
      <header>
        <h3 class="text-2xl text-white  font-medium mt-[0.6em]">{{ project.title }}</h3>
        <p class="text-white text-sm font-normal">
          {{ project.text }}
        </p>
      </header>
    </article>
    <!-- Skills -->
    <ul class="flex flex-wrap pl-0 text-white list-none gap-x-4 gap-y-2 border-t-2 pt-4">
      <li v-for="technology in project.technologies" class="my-0 pl-0 text-sm">• {{ technology }}</li>
    </ul>
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