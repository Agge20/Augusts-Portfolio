<template>
  <a href="#main" aria-label="Go to main content"></a>
  <Spinner v-if="!themeHasBeenLoaded" />
  <div v-if="themeHasBeenLoaded" :class="theme === 'light' ? 'bg-white' : 'bg-dark-100'"
    class="min-h-screen overflow-x-hidden pb-64 transition">
    <navbar />
    <main id="main">
      <!-- Center content -->
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <Hero />
        <ChangeLightTheme />
      </div>
      <div class="relative z-20 mt-8 mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <!-- About me text section -->
        <TextAndHeading v-if="aboutMeTextData" ref="aboutMe" v-element-visibility="onAboutMeVisibility"
          :headingText="aboutMeTextData.heading_text" :highlightText="aboutMeTextData.highlight_text"
          :highlightAlignment="'start'" :text="aboutMeTextData.text"
          :class="{ 'animate-fade-in mt-16 opacity-100 transition': aboutMeIsVisible, 'opacity-0': !aboutMeIsVisible }"
          class="mb-24" />
        <!-- Main interests section -->
        <Interests ref="myInterests" v-element-visibility="onMyInterestsVisibility"
          :class="{ 'animate-fade-in opacity-100 transition': myInterestsIsVisible, 'opacity-0': !myInterestsIsVisible }" />
        <!-- Skills section -->
        <Skills :skills="skills" />
        <!-- Contact section -->
        <TextAndHeading :headingText="'Want to'" :highlightText="'contact me?'" :highlightAlignment="'end'"
          :text="'<a>Email: augustraro112@hotmail.com</a><br><p>Phone number: +0725662442</p>'" class="mb-24" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/* Store imports  */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the store
const mainStore = useMainStore();
const { theme, skills } = storeToRefs(mainStore);

/* Reactive state */
const themeHasBeenLoaded = ref<boolean>(false);
const aboutMeTextData = ref<AboutMeTextData | null>(null);

/* Types */
import type { AboutMeTextData } from "~/types/AboutMeTextData";
import type { Skill } from "~/types/Skill";

onMounted(() => {
  // Check the user theme preference
  mainStore.checkUserThemePreference();
  themeHasBeenLoaded.value = true;
});

/* VueUse imports */
import { vElementVisibility } from '@vueuse/components'

const { data: rawAboutMeTextData } = await useFetch('/api/_content/query?_params={"where":{"_path":"/json/text/about-me"}}');
// @ts-ignore
aboutMeTextData.value = rawAboutMeTextData.value[0];

/* Template refs */
const aboutMe = ref(null);
const myInterests = ref(null);

const aboutMeIsVisible = ref<boolean>(false);
const myInterestsIsVisible = ref<boolean>(false);

function onAboutMeVisibility(state: boolean): void {
  aboutMeIsVisible.value = state
}

function onMyInterestsVisibility(state: boolean): void {
  myInterestsIsVisible.value = state
}


/**
* Fetches Nuxt Content JSON-objects from the "skills" directory.
*
* This function uses the `useAsyncData` hook to fetch data from the "skills" endpoint.
* The data is then mapped to the `Skill` type.
*
* @returns A reactive data object with the fetched JSON-data.
*/
const { data: skillsData } = await useAsyncData("skills", async () => {
  const result = await queryContent("json", "skills").find();
  return result.map((item: any): Skill => ({
    title: item.title,
    imagePath: item.imagePath,
    imageAlt: item.imageAlt,
  }));
});

watchEffect(() => {
  // When the skills data changes, update the store value that holds the skills
  if (skillsData.value) {
    console.log("skillsData: ", skillsData.value);
    skills.value = skillsData.value ?? [];
  }
})
</script>
