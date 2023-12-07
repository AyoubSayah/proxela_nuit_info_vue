<template>
  <div class="modal-container z-40">
    <ModalAnimation appear :name="name">
      <slot />
    </ModalAnimation>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent, onBeforeUnmount, onMounted } from "vue";
import ModalAnimation from "../../animations/ModalAnimation.vue";
type TAnimation = "scale" | "goDown" | "goUp" | "none";

defineProps<{ name?: TAnimation }>();
onMounted(() => {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});
onBeforeUnmount(() => {
  const modal = document.getElementById("modal");
  if (modal?.children.length === 1) {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
});
</script>
