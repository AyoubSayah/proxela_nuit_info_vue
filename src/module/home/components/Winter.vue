<template>
  <div class="absolute flex h-full w-full flex-wrap justify-between md:w-1/2">
    <div
      class="relative m-4 h-1 w-[.38rem] rounded-full bg-white opacity-0"
      v-bind:style="{
        animation: 'snowAnimation 4.5s infinite ease-out ' + getDelay(),
      }"
      v-for="n in 120"
      :key="n"
    ></div>
  </div>
</template>
<script lang="ts" setup>
const getDelay = () => {
  return Math.random() * 5 + "s";
};
</script>
