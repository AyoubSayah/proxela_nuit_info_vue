<template>
  <router-link
    exact-active-class="text-theme-secondary  svgchild:fill-theme-secondary "
    class="flex w-1/4 cursor-pointer flex-col items-center justify-center text-spring-secondary parent-hover:fill-theme-secondary"
    :to="to"
  >
    <slot></slot>
  </router-link>
</template>
<script lang="ts" setup>
defineProps<{ to: string }>();
</script>
