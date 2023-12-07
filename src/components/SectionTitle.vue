<template>
  <h2
    :class="[
      {
        ['!visible animate-[animationUp_1.5s]']: isScrolledInto && animation,
      },
      { ['!visible']: !animation },

      'text-bold invisible mb-12 text-center text-2xl font-semibold uppercase !text-theme-secondary',
    ]"
    :id="id"
  >
    {{ title }}
  </h2>
</template>
<script lang="ts" setup>
import useIsScrolled from "@/utils/hooks/useIsScrolled";

export interface ITitle {
  title?: string;
  animation?: boolean;
  id?: string;
}
const { title, animation = false, id } = defineProps<ITitle>();

const isScrolledInto = animation && id ? useIsScrolled(id) : false;
</script>
