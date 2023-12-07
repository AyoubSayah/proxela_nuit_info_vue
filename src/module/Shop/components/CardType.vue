<template>
  <div>
    <div
      :class="{ '!border-[3px]': type.toLowerCase() === name.toLowerCase() }"
      class="my-2 mx-8 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-0 border-solid border-theme-secondary bg-white shadow-sm shadow-theme-secondary hover:border-[3px]"
    >
      <div class="h-12 w-12">
        <img :src="img" alt="" />
      </div>
    </div>
    <p class="text-center font-display font-bold">{{ name }}</p>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ name: string; img: string; type: string }>();
</script>
