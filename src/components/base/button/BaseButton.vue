<template>
  <button
    :class="{
      lg: size === 'lg',
      md: size === 'md',
      sm: size === 'sm',
      primary: color === 'primary' && !outline,
      secondary: color === 'secondary' && !outline,
      success: color === 'success' && !outline,
      danger: color === 'danger' && !outline,
      'outline-primary': outline && color === 'primary',
      'outline-secondary': outline && color === 'secondary',
      'outline-success': outline && color === 'success',
      'outline-danger': outline && color === 'danger',
    }"
    class="m-2 rounded-md border-2 border-none font-semibold shadow transition-all focus:outline focus:outline-2"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
export interface InputProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger";
  outline?: boolean;
}

withDefaults(defineProps<InputProps>(), {
  size: "lg",
  color: "primary",
  outline: false,
});
</script>
<style lang="postcss" scoped>
.lg {
  @apply py-2 px-5 text-lg;
}
.md {
  @apply py-1 px-3 text-base;
}
.sm {
  @apply p-1 text-sm;
}
.primary {
  @apply bg-theme-secondary fill-theme-primary text-theme-primary hover:bg-theme-secondary-300 focus:bg-theme-secondary-300    focus:outline-theme-secondary;
}
.secondary {
  @apply bg-theme-primary fill-theme-secondary text-theme-secondary hover:bg-theme-primary-200 focus:bg-theme-primary-200    focus:outline-theme-primary;
}
.success {
  @apply bg-green-500 fill-white text-white hover:bg-green-600 focus:bg-green-600    focus:outline-green-600;
}
.danger {
  @apply bg-red-500 fill-white text-white hover:bg-red-600 focus:bg-red-600    focus:outline-red-600;
}
.outline-primary {
  @apply border border-solid border-theme-secondary bg-transparent  fill-theme-secondary text-theme-secondary hover:bg-theme-secondary-30 focus:border-theme-secondary-200;
}
.outline-secondary {
  @apply border border-solid border-theme-primary bg-transparent  fill-theme-primary text-theme-primary hover:bg-theme-primary-30 focus:border-theme-primary-200;
}
.outline-success {
  @apply border border-solid border-green-500 bg-transparent  fill-green-500 text-green-500 hover:bg-green-200 focus:border-green-600;
}
.outline-danger {
  @apply border border-solid border-red-500 bg-transparent  fill-red-500 text-red-500 hover:bg-red-200 focus:border-red-600;
}
</style>
