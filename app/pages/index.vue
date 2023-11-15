<template>
  <spinner v-if="!themeHasBeenLoaded" />
  <main v-if="themeHasBeenLoaded" :class="theme === 'light' ? 'bg-white' : 'bg-dark-100'"
    class="min-h-screen overflow-x-hidden pb-64 transition">
    <navbar />
    <!-- Center content -->
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
      <hero />
      <change-light-theme />
    </div>
    <div class="relative z-20 mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
      <!-- About me text section -->
      <text-and-heading v-if="aboutMeTextData" ref="aboutMe" v-element-visibility="onAboutMeVisibility"
        :headingText="aboutMeTextData.heading_text" :highlightText="aboutMeTextData.highlight_text"
        :highlightAlignment="'start'" :text="aboutMeTextData.text"
        :class="{ 'animate-fade-in mt-16 opacity-100 transition': aboutMeIsVisible, 'opacity-0': !aboutMeIsVisible }"
        class="mb-24" />
      <!-- Main interests section -->
      <interests-section ref="myInterests" v-element-visibility="onMyInterestsVisibility"
        :class="{ 'animate-fade-in mt-16 opacity-100 transition': myInterestsIsVisible, 'opacity-0': !myInterestsIsVisible }" />

      <!-- Contact section -->
      <text-and-heading :headingText="'Want to'" :highlightText="'contact me?'" :highlightAlignment="'end'"
        :text="'<a>Email: augustraro112@hotmail.com</a><br><p>Phone number: +0725662442</p>'" class="mb-24" />
    </div>
  </main>
</template>

<script setup lang="ts">
/* Store imports  */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the store
const mainStore = useMainStore();
const { theme } = storeToRefs(mainStore);

/* Reactive state */
const themeHasBeenLoaded = ref<boolean>(false);
const aboutMeTextData = ref<AboutMeTextData | null>(null);

/* Types */
import type { AboutMeTextData } from "~/types/AboutMeTextData";

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

const isVisible = ref(false)

const aboutMeIsVisible = ref(false);
const myInterestsIsVisible = ref(false);

function onAboutMeVisibility(state) {
  aboutMeIsVisible.value = state
}

function onMyInterestsVisibility(state) {
  myInterestsIsVisible.value = state
}

</script>
