<template>
  <Transition name="bounce-left"><slot /></Transition>
</template>
<script lang="ts" setup></script>
<style scoped>
.bounce-left-leave-active {
  animation: bounce-left 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

@keyframes bounce-left {
  100% {
    transform: translateX(-150%);
  }
}
</style>
