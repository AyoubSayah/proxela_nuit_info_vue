import { ref } from "vue";

const useModal = () => {
  const showModal = ref(false);
  const onCloseModal = () => {
    showModal.value = false;
  };
  const onOpenModal = () => {
    showModal.value = true;
  };
  return { showModal, onCloseModal, onOpenModal };
};
export default useModal;
