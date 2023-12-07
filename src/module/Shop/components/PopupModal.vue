<template v-if="shared.showModal">
  <base-modal
    :ayoub="'dzadza'"
    :show-modal="shared.showModal"
    :on-close-modal="onCloseModal"
  >
    <modal-container class="h-full md:h-max" name="goDown">
      <div
        ref="container_isadded"
        class="max-w-screen relative h-[calc(100%_-_3rem)] max-h-full overflow-auto rounded bg-white transition-all md:h-[25rem] md:w-[800px]"
      >
        <svg
          @click="onCloseModal"
          class="fill-theme-secondary absolute right-3 mt-4 h-8 w-8 cursor-pointer transition-all hover:scale-105"
        >
          <use xlink:href="/icons.svg#icon-close"></use>
        </svg>

        <div class="flex h-full w-full flex-col gap-3 p-3 md:flex-row">
          <div class="m-auto">
            <div class="bg-theme-gray ml-8 h-80 w-72">
              <img
                class="h-full w-full rounded object-cover"
                :src="shared.item.img"
                alt=""
              />
            </div>
          </div>
          <div class="md:m-auto">
            <p
              class="text-theme-secondary text-center text-3xl font-bold md:text-left"
            >
              {{ shared.item.name }}
            </p>
            <p
              class="mt-2 mb-2 flex items-center justify-center text-xl font-medium text-gray-900 md:justify-start"
              v-if="shared.item.colors"
            >
              Color:
              <span
                v-for="(color, index) in shared.item.colors"
                :key="index"
                class="ml-2 h-5 w-5 cursor-pointer rounded-sm"
                @click="changeindex(index)"
                :style="
                  index == indexselect
                    ? `background:${color};border:2px solid black`
                    : `background:${color}`
                "
              ></span>
            </p>
            <p
              class="mb-4 mt-3 text-center text-2xl font-medium text-gray-900 md:text-left"
            >
              Price: <span class="font-bold">{{ shared.item.price }}DT</span>
            </p>
            <p class="text-center text-gray-700 md:text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias velit ullam voluptas dolor, saepe deleniti, eaque
              ducimus quidem incidunt ea eligendi possimus. Sunt est sequi
              beatae amet excepturi veritatis repudiandae.
            </p>
            <base-button
              class="ml-auto mt-8 flex items-center gap-2"
              @click="() => addToBasket(shared.item)"
            >
              <svg class="h-5 w-5">
                <use xlink:href="/icons.svg#icon-cart"></use>
              </svg>
              Add to cart
            </base-button>
          </div>
        </div>
      </div>
    </modal-container>
  </base-modal>
</template>
<script lang="ts" setup>
import { ref, type VNodeRef } from "vue";
import BaseModal from "@/components/base/Modal/BaseModal.vue";
import BaseButton from "../../../components/base/button/BaseButton.vue";
import ModalContainer from "../../../components/base/Modal/ModalContainer.vue";
import { useCartStore } from "@/stores/cartStore";

import type { IshopItem } from "@/module/cart/mock/types";
import { sharedStore } from "@/stores/shared";
const { addTobasketStore } = useCartStore();
const container_isadded = ref<any>();
const shared = sharedStore();
const onCloseModal = shared.onCloseModal;

let indexselect = ref(0);

const addToBasket = (item: IshopItem) => {
  addTobasketStore(item);
  onCloseModal();
};
const changeindex = (data: any) => {
  indexselect.value = data;
};
</script>
