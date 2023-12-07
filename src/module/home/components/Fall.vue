<template>
  <div
    class="rain absolute flex h-full w-full flex-wrap justify-between md:w-1/2"
  >
    <div
      class="relative m-1 h-4 w-[0.005rem] transform-gpu bg-theme-secondary opacity-0"
      :style="{
        animation:
          'rainanimation 1.5s infinite cubic-bezier(0.17, 0.67, 0.83, 0.67)  ' +
          getDelay(),
      }"
      v-for="n in 200"
      :key="n"
    ></div>
  </div>
</template>
<script lang="ts" setup>
const getDelay = () => {
  return Math.random() * 5 + "s";
};
</script>
