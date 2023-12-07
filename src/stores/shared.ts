import useModal from "@/components/base/Modal/useModal";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
interface Iitem {
  id?: number;
  price: string;
  name: string;
  img: string;
  colors: string[];
}
const initalItem = {
  price: "",
  name: "",
  img: "",
  colors: [],
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
