<template>
  <a href="#main" aria-label="Go to main content"></a>
  <Spinner v-if="!themeHasBeenLoaded" />
  <div v-if="themeHasBeenLoaded" :class="theme === 'light' ? 'bg-white' : 'bg-gradient-to-br from-dark-100 to-dark-200'"
    class="min-h-screen overflow-x-hidden pb-64 transition">
    <navbar />
    <main id="main">
      <!-- Center content -->
      <div class="content mx-auto max-w-screen-2xl">
        <Hero />
        <ChangeLightTheme />
      </div>
      <div class="content relative z-20 mt-8 mx-auto max-w-screen-2xl">
        <!-- About me text section -->
        <TextAndHeading v-if="aboutMeTextData" id="about-me" ref="aboutMe" v-element-visibility="onAboutMeVisibility"
          :headingText="aboutMeTextData.heading_text" :highlightText="aboutMeTextData.highlight_text"
          :highlightAlignment="'start'" :text="aboutMeTextData.text"
          :class="{ 'animate-fade-in opacity-100 transition': aboutMeIsVisible, 'opacity-0': !aboutMeIsVisible }" />
        <!-- Main interests section -->
        <Interests id="interests" ref="myInterests" v-element-visibility="onInterestsVisibility"
          :class="{ 'animate-fade-in opacity-100 transition': interestsIsVisible, 'opacity-0': !interestsIsVisible }" />
        <!-- Skills section -->
        <Skills id="skills" v-element-visibility="onSkillsVisibility" :skills="skills"
          :class="{ 'animate-fade-in opacity-100 transition': skillsIsVisible, 'opacity-0': !skillsIsVisible }" />
        <!-- Contact section -->
        <TextAndHeading id="contact" :headingText="'Want to'" :highlightText="'contact me?'" :highlightAlignment="'end'"
          :text="'<a>Email: augustraro112@hotmail.com</a><br><p>Phone number: +0725662442</p>'" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
/* Store imports  */
import { useMainStore } from "~/stores/mainStore";
import { storeToRefs } from "pinia";

// Use the store
const mainStore = useMainStore();
const { theme, skills } = storeToRefs(mainStore);

/* Reactive state */
const themeHasBeenLoaded = ref<boolean>(false);
const aboutMeTextData = ref<AboutMeTextData | null>(null);

/* Types */
import type { AboutMeTextData } from "~/types/interfaces/AboutMeTextData";
import type { Skill } from "~/types/interfaces/Skill";

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

/* Elements are visible or not */
const aboutMeIsVisible = ref<boolean>(false);
const interestsIsVisible = ref<boolean>(false);
const skillsIsVisible = ref<boolean>(false);

function onAboutMeVisibility(state: boolean): void {
  aboutMeIsVisible.value = state
}

function onInterestsVisibility(state: boolean): void {
  interestsIsVisible.value = state
}

function onSkillsVisibility(state: boolean): void {
  skillsIsVisible.value = state
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
    skills.value = skillsData.value ?? [];
  }
})
</script>
~/stores/main