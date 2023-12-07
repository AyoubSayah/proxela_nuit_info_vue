<template>
  <select
    :class="{
      lg: size === 'lg',
      md: size === 'md',
      sm: size === 'sm',
      'border-2 border-red-400': errorObject?.$errors?.length > 0,
    }"
    class="m-2 w-full rounded-md border-2 accent-theme-secondary outline-2 outline-theme-secondary"
    :value="modelValue"
    @input="onChange"
    @change="(e:any) => modelValue = e.target.value"
  >
    <slot />
  </select>
  <template v-if="errorObject">
    <span
      class="-mt-3 flex w-full flex-col"
      v-for="error of errorObject.$errors"
      :key="error.$uid"
    >
      <span class="text-xs text-red-500">{{ error.$message }}</span>
    </span>
  </template>
</template>
<script lang="ts" setup>
export interface InputProps {
  size?: "sm" | "md" | "lg";
  modelValue?: any;
  errorObject?: any;
}
const { modelValue, errorObject } = withDefaults(defineProps<InputProps>(), {
  size: "lg",
});
const emit = defineEmits(["update:modelValue"]);
const onChange = (value: any) => {
  try {
    emit("update:modelValue", value.target.value);

    if (errorObject && errorObject.$model) {
      errorObject.$model = value.target.value;
    }
  } catch (error) {}
};
</script>
<style lang="postcss" scoped>
.lg {
  @apply py-2 px-3;
}
.md {
  @apply py-1 px-2;
}
.sm {
  @apply p-0;
}
</style>
