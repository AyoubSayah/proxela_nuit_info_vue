<template>
  <div
    ref="inputDiv"
    :class="[
      {
        lg: size === 'lg' && type != 'color',
        md: size === 'md' && type != 'color',
        sm: size === 'sm' && type != 'color',
        'border-2 border-red-400': errorObject?.$errors?.length > 0,
      },
      divClass,
    ]"
    class="accent-theme-secondary outline-theme-secondary m-2 flex h-full w-full items-center gap-2 rounded-md border-2 outline-2"
  >
    <div
      :class="{
        lgicon: size === 'lg' && type != 'color',
        mdicon: size === 'md' && type != 'color',
        smicon: size === 'sm' && type != 'color',
      }"
      class="flex h-full w-4 items-center justify-center"
    >
      <slot></slot>
    </div>
    <input
      v-bind="$attrs"
      :type="type"
      @focus="focusModeOn"
      @blur="focusModeOff"
      :value="modelValue"
      @input="onChange"
      class="caret-theme-secondary h-full w-full flex-grow border-none outline-none"
    />
  </div>
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
<script lang="ts">
// use normal <script> to declare options
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
export interface InputProps {
  size?: "sm" | "md" | "lg";
  type?: string;
  modelValue?: string;
  errorObject?: any;
  divClass?: string;
}
const inputDiv = ref<HTMLElement>();

const { errorObject } = withDefaults(defineProps<InputProps>(), {
  size: "lg",
  type: "text",
});
const focusModeOn = () => {
  inputDiv?.value?.classList.add("border-theme-secondary");
};
const focusModeOff = () => {
  inputDiv?.value?.classList.remove("border-theme-secondary");
};
const emit = defineEmits(["update:modelValue", "add"]);

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
  @apply h-12 py-2 px-3;
}
.md {
  @apply h-10 py-1 px-2;
}
.sm {
  @apply h-8 p-0;
}
.lgicon {
  @apply w-6;
}
.mdicon {
  @apply w-5;
}
.smicon {
  @apply ml-2 w-4;
}
</style>
