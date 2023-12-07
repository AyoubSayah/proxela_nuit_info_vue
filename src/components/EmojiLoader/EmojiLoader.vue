<template>
  <div class="fixed top-0 left-0 z-50 flex h-full w-full">
    <div class="flex w-1/2 items-center bg-theme-primary">
      <div class="aboslute left-1/2 top-3/4 text-white">
        <typewriter :type-interval="100">
          <div>Typewriter Vue</div>
        </typewriter>
      </div>
      <div
        class="ml-auto h-72 w-36 rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full shadow-[-4px_0px_4px_1px] shadow-theme-secondary"
      >
        <div
          class="ml-auto flex h-72 w-36 flex-col justify-end rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full bg-white"
        >
          <div
            class="mb-auto mt-16 h-8 w-8 self-center justify-self-end rounded-full bg-theme-secondary"
          ></div>

          <div
            class="ml-auto mt-[1px] mb-8 h-24 w-24 animate-rotateRight rounded-tr-none rounded-br-none rounded-tl-full rounded-bl-full border border-r-4 border-r-theme-primary bg-theme-primary"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex w-1/2 items-center bg-theme-secondary">
      <div
        class="border-5 mr-auto h-72 w-36 rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full border shadow-[4px_0px_4px_1px] shadow-theme-primary"
      >
        <div
          class="mr-auto flex h-72 w-36 flex-col justify-end rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full bg-white"
        >
          <div
            class="mb-auto mt-16 h-8 w-8 self-center justify-self-start rounded-full bg-theme-secondary"
          ></div>
          <div
            class="m-0 mb-8 -ml-[1px] h-24 w-24 animate-rotateRight rounded-tl-none rounded-bl-none rounded-tr-full rounded-br-full border-2 border-solid border-l-theme-primary bg-theme-primary p-0"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
