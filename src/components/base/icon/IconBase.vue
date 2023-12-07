<template>
  <svg>
    <use :xlink:href="`/icons.svg#${iconName}`"></use>
  </svg>
</template>
<script lang="ts" setup>
defineProps<{ iconName: string }>();
</script>
