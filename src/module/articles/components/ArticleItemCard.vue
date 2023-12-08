<template>
  <div
    :key="key"
    class="flex-shrink-1 parent-hover:bg-white parent-hover:opacity-100 sx:w-64 relative m-4 h-96 w-72 rounded-lg bg-white p-4 shadow-xl md:w-72"
  >
    <div class="h-5/6 w-full overflow-hidden rounded-lg">
      <img :src="img" alt=""  class="object-cover h-full w-full"/>
    </div>
    <button
      @click="openPopup"
      class="absolute top-[45%] left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer rounded border-none py-2 px-4 text-sm opacity-0 transition-all"
    >
      view details
    </button>
    <p
      class="font-display mb-2 text-center font-medium capitalize mt-2 text-gray-900"
    >
      {{ name }}
    </p>

  </div>
</template>

<script lang="ts" setup>
import useModal from "@/components/base/Modal/useModal";
import { sharedStore } from "@/stores/shared";

const { description, name, img } = defineProps<{
  name: string;
  description?: string;
  img: string;
  key?: number;
}>();
const { showModal, onCloseModal, onOpenModal } = useModal();
const { openModalHandler } = sharedStore();
const openPopup = () => {
  openModalHandler({ description, name, img });
};
</script>
