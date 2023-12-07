<template>
  <main
    class="bg-theme-gray grid grid-cols-1 items-baseline md:grid-cols-3 md:p-4"
  >
    <div class="grid-col-1 col-span-2 grid gap-4 p-4 md:grid-cols-2">
      <card-cart-item
        v-for="item in shopItems"
        :price="item.price"
        :img="item.img"
        :name="item.name"
      />
    </div>
    <cart-total />
  </main>
</template>
<script lang="ts" setup>
import { shopItems } from "./mock/mock";
import CardCartItem from "./components/CardCartItem.vue";
import CartTotal from "./components/CartTotal.vue";
import useScrollToptop from "@/utils/hooks/useScrolltoTop";
useScrollToptop();
</script>
