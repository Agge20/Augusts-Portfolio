<template>
  <header id="header" class="relative z-20 mx-auto flex h-32 w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
    <div class="center flex w-full justify-end">
      <!-- Navigation links -->
      <ul id="navbar" class="hidden items-center md:flex">
        <NavbarLink v-for="link in navigationLinks" :key="link.scrollToId" :link="link" />
      </ul>
      <Socials />
      <!-- Hamburger -->
      <div id="hamburger" @click="openNavbarMobile = !openNavbarMobile"
        class="fixed right-4 top-6 z-30 flex flex-col gap-2 md:hidden">
        <span v-for="index in 3" :key="index" class="inline-block h-[3px] w-8 rounded-full"
          :class="hamburgerColor"></span>
      </div>
      <NavbarMobile v-if="openNavbarMobile" :links="navigationLinks" />
    </div>
  </header>
</template>

<script lang="ts" setup>
/* Types */
import { NavigationLinks, NavigationText } from "@/types/NavigationTypes";
import { TimelineSegment } from "@motionone/dom/types/timeline/types";

/* Motion one imports */
import { timeline } from "motion";

/* Store imports */
import { useMainStore } from "~/stores/MainStore";
import { storeToRefs } from "pinia";

// Use the main store
const mainStore = useMainStore();
// Import the theme-state from the main store and destructure it into a ref
const { theme } = storeToRefs(mainStore);

// Reactive state
const openNavbarMobile = ref<boolean>(false);
const hamburgerColor = ref<string>("text-white");

// Create a ref to the navigation links
const navigationLinks = ref<NavigationLinks>([
  {
    text: NavigationText.AboutMe,
    scrollToId: "about-me",
  },
  {
    text: NavigationText.Skills,
    scrollToId: "skills",
  },
  {
    text: NavigationText.Portfolio,
    scrollToId: "portfolio",
  },
  {
    text: NavigationText.Contact,
    scrollToId: "contact",
  },
]);

onMounted(() => {
  const navigationLinks: NodeListOf<HTMLLIElement> = document.querySelectorAll("#navbar li");
  const navigationLinksLength: number = navigationLinks.length;

  // Create timeline segment for each navigation link with extra delay
  const navigationLinksTimeline: TimelineSegment[] = [];

  for (let i = 0; i < navigationLinksLength; i++) {
    navigationLinksTimeline.push([
      `#navbar li:nth-child(${i + 1})`,
      {
        opacity: 1,
        x: 20,
      },
    ]);
  }

  const navbarSequence: TimelineSegment[] = [
    [
      "#navbar",
      {
        x: -20,
      },
    ],
    ...navigationLinksTimeline,
  ];
  timeline(navbarSequence, { duration: 1 });

  // If mobile navbar is opened animate the hamburger
  const hamburgerSequenceOpen: TimelineSegment[] = [
    [
      "#hamburger span:nth-child(1)",
      {
        opacity: 1,
        y: [0, 11],
      },
    ],
    [
      "#hamburger span:nth-child(3)",
      {
        opacity: 1,
        y: [0, -11],
      },
    ],
  ];

  // If mobile navbar is closed animate then hamburger
  const hamburgerSequenceClose: TimelineSegment[] = [
    [
      "#hamburger span:nth-child(1)",
      {
        opacity: 1,
        y: [11, 0],
      },
    ],
    [
      "#hamburger span:nth-child(3)",
      {
        opacity: 1,
        y: [-11, 0],
      },
    ],
  ];

  watchEffect(() => {
    // When hamburger has been opened
    if (openNavbarMobile.value) {
      hamburgerColor.value = "bg-white";
      // Run the open hamburger animation after 1.5 seconds
      timeline(hamburgerSequenceOpen, { duration: 0.5, delay: 1.25 });
    } else {
      // Run the close hamburger animation
      hamburgerColor.value = theme.value === "light" ? "bg-dark-100" : "bg-white";
      timeline(hamburgerSequenceClose, { duration: 0.5 });
    }
  });
});
</script>
