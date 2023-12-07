<template>
  <TransitionGroup class="bg-theme-gray" tag="div" name="listScale">
    <slot />
  </TransitionGroup>
</template>
<script lang="ts" setup></script>
<style>
@media (min-width: 768px) {
  .listScale-move, /* apply transition to moving elements */
.listScale-enter-active,
.listScale-leave-active {
    transition: all 0.7s ease;
  }

  .listScale-enter-from,
  .listScale-leave-to {
    opacity: 0;
    transform: scale(0.3);
  }

  /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
  .listScale-leave-active {
    position: absolute;
  }
}
</style>
