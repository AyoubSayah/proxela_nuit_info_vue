<template>
  <header class="hidden w-full justify-center sm:flex">
    <div
      class="bg-theme-primary text-theme-secondary flex h-28 w-full max-w-[2400px] items-center justify-between py-4 px-16"
      :class="[
        sticky ? 'animate-down-anime fixed left-0  z-30  !h-14 shadow-lg' : '',
      ]"
    >
      <Link to="/" class="w-16">Home</Link>
      <Link to="/articles" class="w-16">Articles</Link>

      <div :class="['h-36 w-[9rem] mt-2', { 'hidden': sticky }]">
        <img
          class="h-full w-full rounded-bl-xl rounded-br-xl pb-2"
          :src="fullTheme.logo"
          alt=""
        />
      </div>
      <Link to="/about" class="w-16">About us</Link>
      <Link to="/contact-us" class="w-16">Contact</Link>

    </div>
  </header>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
import Link from "@/components/Link.vue";
defineProps<{ color?: string; background?: string; sticky?: boolean }>();
const { fullTheme } = useThemeStore();
</script>
