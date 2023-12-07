<template>
  <Transition :name="name"><slot /></Transition>
</template>
<script lang="ts" setup>
type TAnimation = "scale" | "goDown" | "goUp" | "none";

defineProps<{ name?: TAnimation }>();
</script>
<style scoped>
.scale-leave-active {
  animation: scale 0.5s reverse;
}
.scale-enter-active {
  animation: scale 0.5s;
}

@keyframes scale {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
.goDown-leave-active {
  animation: scale 0.5s reverse;
}
.goDown-enter-active {
  animation: goDown 0.5s;
}

@keyframes goDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(1%);
  }
}
.goUp-leave-active {
  animation: goUp 0.5s reverse;
}
.goUp-enter-active {
  animation: goUp 0.5s;
}

@keyframes goUp {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-2%);
  }
}
</style>
