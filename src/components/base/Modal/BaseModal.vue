<template>
  <Teleport to="#modal">
    <animation v-if="showModal">
      <div
        class="fixed right-0 top-1/2 z-30 flex h-full w-full -translate-y-1/2 flex-row-reverse items-center justify-center"
      >
        <backdrop-base class="z-30" @click="() => onCloseModal()" />
        <slot />
      </div>
    </animation>
  </Teleport>
</template>
<script lang="ts" setup>
import BackdropBase from "../backdrop/BackdropBase.vue";

defineProps<{
  showModal: boolean;
  onCloseModal: any;
}>();
</script>
