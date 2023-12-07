<template>
  <div
    class="rain absolute flex h-full w-full flex-wrap justify-between md:w-1/2"
  >
    <img
      class="relative m-4 h-8 w-8 opacity-0"
      :src="fullTheme.icon"
      alt=""
      v-bind:style="{
        animation:
          'rainanimation 7s infinite cubic-bezier(.02,.03,1,1) ' + getDelay(),
      }"
      v-for="n in 40"
      :key="n"
    />
  </div>
</template>
<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
const { fullTheme } = useThemeStore();

const getDelay = () => {
  return Math.random() * 5 + "s";
};
</script>
