<template>
  <div
    class="item relative m-8 flex h-48 w-80 flex-col items-center justify-center rounded border-2 border-white bg-white py-16 px-12 shadow-lg parent-hover:opacity-100 parent-hover:rotatey-[rotateY(0)]"
  >
    <div class="h-16 w-16">
      <icon-base
        class="icon icon-home2 h-full w-full fill-theme-secondary"
        :icon-name="icon"
      />
    </div>
    <div class="text-center text-xl font-semibold text-gray-700">
      {{ title }}
    </div>
    <div
      class="behind absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center bg-theme-secondary opacity-0 transition-all rotatey-[rotateY(180deg)]"
    >
      <div class="h-16 w-16">
        <icon-base class="h-full w-full fill-white" :icon-name="icon" />
      </div>
      <div class="text-center font-semibold text-white">{{ title }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconBase from "./base/icon/IconBase.vue";
defineProps<{
  title: string;
  icon: string;
}>();
</script>
