<template>
  <div
    class="flex h-max flex-col gap-3 rounded-lg bg-white p-6 shadow-lg md:m-3"
  >
    <div class="flex justify-between">
      <div class="text-xl font-bold">Subtotal</div>
      <div class="text-xl font-bold">$169.99</div>
    </div>
    <div class="flex justify-between">
      <div class="text-xl font-medium">Shipping</div>
      <div class="text-xl font-medium">$100</div>
    </div>
    <div class="flex justify-between">
      <div class="text-xl font-medium">Sales Taxes</div>
      <div class="text-xl font-medium">$50</div>
    </div>
    <hr />
    <div class="flex justify-between">
      <div class="text-2xl font-bold">Total</div>
      <div class="text-2xl font-bold">$319.99</div>
    </div>
    <base-button class="mt-4 flex items-center justify-center gap-1">
      <icon-base class="h-8 w-8" icon-name="icon-locked" />Begin
      Checkout</base-button
    >
  </div>
</template>
<script lang="ts" setup>
import BaseButton from "../../../components/base/button/BaseButton.vue";
import IconBase from "../../../components/base/icon/IconBase.vue";
</script>
