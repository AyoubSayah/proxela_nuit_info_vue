<template>
  <div class="item">
    <router-link
      exact-active-class="font-semibold before:!w-[80%] before:!opacity-100 "
      class="relative h-max w-max font-display before:absolute before:-bottom-1 before:h-1 before:w-0 before:bg-theme-secondary before:opacity-0 before:transition-all hover:font-semibold hover:before:w-[80%] hover:before:opacity-100"
      :to="to"
      ><slot></slot
    ></router-link>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ to: string }>();
</script>
