<template>
  <div class="fixed top-0 left-0 z-40 flex h-full w-full">
    <LoaderTransitionLeft>
      <div class="flex w-1/2 items-center bg-theme-primary" v-if="isLoading">
        <div
          class="ml-auto h-72 w-36 rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full shadow-[-4px_0px_4px_1px] shadow-theme-secondary"
        >
          <div
            class="ml-auto flex h-72 w-36 items-center rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full bg-theme-secondary"
          >
            <div
              class="ml-auto h-48 w-24 rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full border border-r-4 border-r-theme-primary bg-theme-primary"
            ></div>
          </div>
        </div>
      </div>
    </LoaderTransitionLeft>
    <LoaderTransitionRight>
      <div class="flex w-1/2 items-center bg-theme-secondary" v-if="isLoading">
        <div
          class="mr-auto h-72 w-36 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full border shadow-[4px_0px_4px_1px] shadow-theme-primary"
        >
          <div
            class="f mr-auto flex h-72 w-36 items-center rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full bg-theme-secondary"
          >
            <div
              class="m-0 h-48 w-24 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full border-2 border-solid border-l-theme-primary bg-theme-primary p-0"
            ></div>
          </div>
        </div>
      </div>
    </LoaderTransitionRight>

    <div
      v-if="isAnimation"
      class="absolute top-1/2 left-1/2 z-50 mr-auto h-72 w-72 -translate-y-1/2 -translate-x-1/2 rounded-full shadow-[4px_0px_4px_1px] shadow-theme-primary"
    >
      <div
        :class="{ 'animate-rotateLeft': isAnimation }"
        class="flex h-72 w-72 items-center justify-center rounded-full border-[5px] border-dotted border-theme-primary bg-theme-secondary p-3"
      >
        <div
          :class="{ 'animate-rotateRight': isAnimation }"
          class="m-0 h-48 w-48 rounded-full border-2 border-dashed border-theme-secondary bg-theme-primary p-0"
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import LoaderTransitionRight from "../animations/LoaderTransitionRight.vue";
import LoaderTransitionLeft from "../animations/LoaderTransitionLeft.vue";
const isLoading = ref(true);
const isAnimation = ref(true);
setTimeout(() => {
  isAnimation.value = false;
  setTimeout(() => {
    isLoading.value = false;
  }, 100);
}, 2200);
</script>
