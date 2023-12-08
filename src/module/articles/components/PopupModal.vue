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
              class="text-theme-secondary text-center text-2xl font-bold md:text-left mb-4"
            >
              {{ shared.item.name }}
            </p>
        
        
            <p class="text-center text-gray-700 md:text-left mt-2">
              {{ shared.item.description }}

            </p>
       
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

import { sharedStore } from "@/stores/shared";
const container_isadded = ref<any>();
const shared = sharedStore();
const onCloseModal = shared.onCloseModal;

let indexselect = ref(0);


const changeindex = (data: any) => {
  indexselect.value = data;
};
</script>
