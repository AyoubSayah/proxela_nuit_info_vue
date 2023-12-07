<template>
  <input
    :class="{
      lg: size === 'lg' && type != 'color',
      md: size === 'md' && type != 'color',
      sm: size === 'sm' && type != 'color',
      'border-2 border-red-400': errorObject?.$errors?.length > 0,
    }"
    :type="type"
    @input="onChange"
    :value="modelValue"
    @change="customOnChange"
    class="m-2 w-full rounded-md border-2 caret-theme-secondary accent-theme-secondary outline-2 outline-theme-secondary"
  />
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
  type: string;
  modelValue?: string;
  errorObject?: any;
  change?: (e: any) => void;
}

const { type, modelValue, errorObject, change } = withDefaults(
  defineProps<InputProps>(),
  {
    size: "lg",
    type: "text",
  }
);
const emit = defineEmits(["update:modelValue"]);
const customOnChange = (e: any) => {
  if (change) change(e);
};
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
  @apply py-0 px-1;
}
</style>
