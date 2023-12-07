<template>
  <base-button
    @click="onOpenModal"
    class="position fixed left-4 bottom-16 z-30 flex h-12 w-12 items-center justify-center !rounded-full !p-3 shadow-lg md:left-8 md:bottom-8"
  >
    <icon-base icon-name="icon-search" class="h-12 w-12" />
  </base-button>
  <base-modal :on-close-modal="onCloseModal" :show-modal="showModal">
    <modal-container name="goUp" class="h-full w-full">
      <div class="h-full w-full bg-white">
        <div class="flex h-24 w-full justify-center p-2">
          <base-icon-input
            placeholder="search"
            div-class="!w-80 ml-auto "
            @input="onSearch"
            ><icon-base
              icon-name="icon-search"
              class="fill-theme-primary-300 h-6 w-6"
            ></icon-base
          ></base-icon-input>
          <base-button
            @click="onCloseModal"
            class="!hover:border-none ml-auto mr-8 !h-12 !w-12 !rounded-full !bg-transparent !p-3 !shadow-none !outline-none"
          >
            <icon-base
              icon-name="icon-close"
              class="fill-theme-secondary h-8 w-8"
            ></icon-base>
          </base-button>
        </div>
        <transition-list-scale
          class="sx:grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] content grid h-[calc(100%_-_6rem)] min-h-[300px] grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] justify-center justify-items-center overflow-y-auto overflow-x-hidden !bg-gray-100 pt-8 md:!grid-cols-[repeat(auto-fit,_minmax(18rem,_20rem))] md:px-4"
        >
          <div v-for="item in shopItemsList">
            <ShopItemCard
              :img="item.img"
              :name="item.name"
              :price="item.price"
              :colors="item.colors"
              :key="item.id"
            />
          </div>
        </transition-list-scale>
      </div>
    </modal-container>
  </base-modal>
</template>
<script lang="ts" setup>
import useModal from "@/components/base/Modal/useModal";
import BaseButton from "../../components/base/button/BaseButton.vue";
import IconBase from "../../components/base/icon/IconBase.vue";
import BaseModal from "../../components/base/Modal/BaseModal.vue";
import ModalContainer from "../../components/base/Modal/ModalContainer.vue";
import BaseIconInput from "../../components/base/input/BaseIconInput.vue";
import { shopItems } from "@/module/Shop/mock/mock";
import { ref } from "vue";
import ShopItemCard from "../../module/Shop/components/ShopItemCard.vue";
import TransitionListScale from "../../components/animations/TransitionListScale.vue";
const { showModal, onCloseModal, onOpenModal } = useModal();
const shopItemsList = ref(shopItems);
const onSearch = (search: any) => {
  shopItemsList.value = shopItems.filter((item) =>
    item.name.toUpperCase().includes(search.target.value.toUpperCase())
  );
};
</script>
