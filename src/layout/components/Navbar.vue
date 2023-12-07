<template>
  <header class="hidden w-full justify-center sm:flex">
    <div
      class="bg-theme-primary text-theme-secondary flex h-28 w-full max-w-[2400px] items-center justify-between py-4 px-16"
      :class="[
        sticky ? 'animate-down-anime fixed left-0  z-30  !h-14 shadow-lg' : '',
      ]"
    >
      <Link to="/" class="w-16">Home</Link>
      <Link to="/shop/men" class="w-16">Men</Link>

      <div :class="['h-28 w-[9rem]', { 'h-14 w-[4rem]  pb-1': sticky }]">
        <img
          class="h-full w-full rounded-bl-xl rounded-br-xl pb-2"
          :src="fullTheme.logo"
          alt=""
        />
      </div>
      <Link to="/shop/women" class="w-16">Women</Link>
      <Link id="navbar-cart" to="/cart" class="relative w-16">
        <span
          v-if="basket && basket?.length > 0"
          class="bg-theme-secondary-90 absolute -right-3 -top-1 flex h-4 w-4 items-center justify-center rounded-full p-2 text-xs font-bold text-white"
          >{{ basket?.length }}</span
        >
        Cart</Link
      >
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme";
import Link from "@/components/Link.vue";
import { useCartStore } from "@/stores/cartStore";
defineProps<{ color?: string; background?: string; sticky?: boolean }>();
const { fullTheme } = useThemeStore();
const { basket } = useCartStore();
</script>
