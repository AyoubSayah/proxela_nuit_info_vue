import type { IshopItem } from "@/module/cart/mock/types";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartStore = defineStore("CartStore", () => {
  const basket = reactive<IshopItem[]>([]);
  const addTobasketStore = (item: IshopItem) => {
    basket.push(item);
  };
  const removeFromBasket = (id: number) => {
    const index = basket.findIndex((item) => item.id === id);
    basket.splice(index, 1);
  };
  const clearBasket = () => {
    basket.splice(0, basket.length);
  };
  return { basket, addTobasketStore, removeFromBasket, clearBasket };
});
