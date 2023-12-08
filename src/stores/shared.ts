import useModal from "@/components/base/Modal/useModal";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
interface Iitem {
  id?: number;
  name: string;
  img: string;

  description?: string;
}
const initalItem = {
  name: "",
  img: "",
  description: "",
};
export const sharedStore = defineStore("SharedStore", () => {
  const item = ref<Iitem>(initalItem);
  const { showModal, onCloseModal, onOpenModal } = useModal();

  const openModalHandler = (itemPopup: any) => {
    item.value = itemPopup;
    onOpenModal();
  };
  return { item, showModal, onCloseModal, openModalHandler };
});
