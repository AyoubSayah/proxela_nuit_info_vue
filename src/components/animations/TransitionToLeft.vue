<template>
  <Transition  class="" name="bounce-left"><slot /></Transition>
</template>
<script lang="ts" setup></script>
<style scoped>
.bounce-left-enter-active {
  animation: bounce-left 0.5s;
}
.bounce-left-leave-active {
  animation: bounce-left 0.5s reverse;
}

@keyframes bounce-left {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
