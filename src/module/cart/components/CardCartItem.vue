<template>
  <div class="rounded bg-white shadow-lg">
    <div class="flex flex-wrap items-center justify-between p-4">
      <div class="flex items-center">
        <div class="h-36 w-36">
          <img :src="img" alt="" class="h-full w-full rounded object-cover" />
        </div>
        <div class="ml-4">
          <p class="mb-3 font-display text-3xl font-bold">{{ name }}</p>
          <p class="font-display text-xl font-medium">{{ price }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center">
          <base-button color="danger" size="sm">
            <icon-base icon-name="icon-minus" class="m-2 h-3 w-3" />
          </base-button>
          <p class="mx-4">1</p>
          <base-button size="sm" color="success">
            <icon-base icon-name="icon-plus" class="m-2 h-3 w-3" />
          </base-button>
        </div>
        <div class="flex flex-col text-center font-bold text-green-700">
          <span class="text-3xl"> In Stock </span> <span>Ready to Ship</span>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between p-4">
      <p class="font-display text-xl font-bold">Total:</p>
      <p class="font-display text-2xl font-bold text-theme-secondary">
        {{ price }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconBase from "../../../components/base/icon/IconBase.vue";
import BaseButton from "../../../components/base/button/BaseButton.vue";
defineProps<{ name: string; price: string; img: string }>();
</script>
