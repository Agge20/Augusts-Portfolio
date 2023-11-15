<template>
  <div class="group relative w-1/3 min-h-88 p-4 bg-blue-100 rounded-xl bg-cover bg-center transition hover:scale-105 "
    :style="`background-image: url(${imagePath})`">
    <div class="bg-dark-200 absolute top-0 left-0 w-full h-full opacity-25"></div>
    <div class="relative z-10 transition-opacity  group-hover:opacity-0">
      <interests-vignette :text="'Interest'" />
      <interests-card-heading :text="title" />
    </div>
    <p class="relative z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">Prow scuttle parrel provost
      Sail ho
      shrouds
      spirits
      boom mizzenmast
      yardarm.
      Pinnace holystone mizzenmast quarter
      crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog
      black jack gangway rutters.</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  imagePath: string;
}

const props = defineProps<Props>();

console.log(props.title);

</script>
