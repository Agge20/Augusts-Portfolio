<template>
  <button aria-label="Interest" @mouseover="showText = true" @mouseleave="showText = false" @click="showText = !showText"
    class="relative w-full min-h-88 p-4 bg-blue-100 rounded-xl bg-cover bg-center transition flex flex-col justify-start items-start lg:w-1/3 hover:scale-105 "
    :style="`background-image: url(${imagePath})`">
    <div class="bg-dark-200 absolute top-0 left-0 w-full h-full opacity-25"></div>
    <div :class="{ 'opacity-0': showText }" class="relative flex flex-col items-start z-10 transition-opacity">
      <interests-vignette :text="'Interest'" />
      <interests-card-heading :text="title" />
    </div>
    <p :class="{ 'opacity-100': showText }" class="relative z-10 text-white opacity-0 transition-opacity text-left">Prow
      scuttle
      parrel provost
      Sail ho
      shrouds
      spirits
      boom mizzenmast
      yardarm.
      Pinnace holystone mizzenmast quarter
      crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog
      black jack gangway rutters.</p>
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  imagePath: string;
}

defineProps<Props>();

const showText = ref<boolean>(false);

</script>
