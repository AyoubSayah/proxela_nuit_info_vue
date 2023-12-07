import { ref, onMounted, onUnmounted } from "vue";

const useIsScrolled = (element: string) => {
  const isScrolledIntoView = ref<boolean | undefined>(false);
  onMounted(() => {
    if (element) window.addEventListener("scroll", checkIsScrolled);
  });

  const checkIsScrolled = () => {
    if (!isScrolledIntoView.value) {
      isScrolledIntoView.value = isScrolledIntoViewFN(element);
      if (isScrolledIntoView.value) {
        window.removeEventListener("scroll", checkIsScrolled);
      }
    }
  };
  const isScrolledIntoViewFN = (el: any) => {
    let element = document.getElementById(el);
    if (element) {
      var rect = element.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
      // Only completely visible elements return true:
      // var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
      // Partially visible elements return true:
      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }
  };
  onUnmounted(() => window.removeEventListener("scroll", checkIsScrolled));

  return isScrolledIntoView;
};
export default useIsScrolled;
