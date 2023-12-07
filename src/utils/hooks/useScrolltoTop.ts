import { onMounted } from "vue";

const useScrollToptop = () => {
  onMounted(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  });
};
export default useScrollToptop;
