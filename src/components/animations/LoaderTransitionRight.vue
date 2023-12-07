<template>
  <Transition name="bounce-right"><slot /></Transition>
</template>
<script lang="ts" setup></script>
<style scoped>
.bounce-right-leave-active {
  animation: bounce-right 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

@keyframes bounce-right {
  100% {
    transform: translateX(150%);
  }
}
</style>
