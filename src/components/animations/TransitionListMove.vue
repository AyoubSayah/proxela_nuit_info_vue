<template>
  <TransitionGroup
    class="flex min-h-[300px] flex-wrap justify-center bg-theme-gray pt-8"
    tag="div"
    name="list"
  >
    <slot />
  </TransitionGroup>
</template>
<script lang="ts" setup></script>
<style scoped>
.list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(40px);
}

/* ensure leaving items are taken out of layout flow so that moving
     animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
