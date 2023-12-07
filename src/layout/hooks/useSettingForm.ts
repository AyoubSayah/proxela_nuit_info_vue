import { useThemeStore } from "@/stores/theme";
import type { Ttheme } from "@/utils/types/theme-type";
import { required } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";

export const useSettingForm = () => {
  const { theme, themeColors, changeTheme } = useThemeStore();
  const selectedTheme = ref<Ttheme>(theme);

  const customTheme = reactive({
    primaryColor: themeColors.custom.primary,
    secondaryColor: themeColors.custom.secondary,
    logo: "",
    animationItem: "",
    image: "",
  });
  const rules = {
    primaryColor: { required },
    secondaryColor: { required },
    selectedTheme: { required },
    logo: "",
    animationItem: "",
    image: "",
  };
  const v$ = useVuelidate(rules, { ...customTheme, selectedTheme });

  const changeThemeFn = () => {
    if (selectedTheme.value === "custom") {
      changeTheme(selectedTheme.value, customTheme);
      return;
    }

    changeTheme(selectedTheme.value);
  };
  return { customTheme, changeThemeFn, selectedTheme, v$ };
};
