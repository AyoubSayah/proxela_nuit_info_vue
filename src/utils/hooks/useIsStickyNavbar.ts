import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const useIsStickyNavbar = () => {
  const StickyNavbar = ref(false);
  const route = useRoute();

  const scroll = () => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        StickyNavbar.value = true;
      } else {
        StickyNavbar.value = false;
      }
    };
  };

  onMounted(() => {
    window.addEventListener("scroll", scroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scroll);
  });
  return StickyNavbar;
};

export default useIsStickyNavbar;
