import { colors } from "@/utils/data/colors";
import {
  autumnTheme,
  intialTheme,
  springTheme,
  summerTheme,
  winterTheme,
} from "@/utils/data/IntialTheme";
import type {
  ICustomTheme,
  Itheme,
  IThemeColor,
} from "@/utils/types/InterfaceTheme";
import type { Ttheme } from "@/utils/types/theme-type";
import { computed } from "@vue/reactivity";
import { defineStore } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { initCustomTheme, setCustomTheme } from "./utils";
const list=["autumn","spring","summer","winter"]
export const useThemeStore = defineStore("themeState", () => {
  const theme = ref<Ttheme>(
    (list[Math.floor(Math.random() * list.length)] as Ttheme) || "autumn"
  );
  const themeLoading = ref<boolean>(true);
  const themeColors = reactive<IThemeColor>(colors);
  const themeAssets = reactive<Itheme>(intialTheme);
  const changeTheme = (newTheme: Ttheme, customTheme?: ICustomTheme) => {
    if (newTheme !== theme.value) {
      themeLoading.value = true;
      setTimeout(() => {
        themeLoading.value = false;
      }, 2800);
    }
    localStorage.setItem("theme", newTheme);
    if (customTheme && newTheme === "custom") {
      setCustomTheme(customTheme, themeAssets, themeColors);
    }
    theme.value = newTheme;
  };
  onMounted(() => {
    if (theme.value === "custom") {
      initCustomTheme(themeAssets, themeColors);
    }
  });
  const fullTheme = computed(() => {
    switch (theme.value) {
      case "summer": {
        themeAssets.image = summerTheme.image;
        themeAssets.logo = summerTheme.logo;
        themeAssets.icon = summerTheme.icon;

        break;
      }

      case "spring": {
        themeAssets.image = springTheme.image;
        themeAssets.logo = springTheme.logo;
        themeAssets.icon = springTheme.icon;
        break;
      }
      case "autumn": {
        themeAssets.image = autumnTheme.image;
        themeAssets.logo = autumnTheme.logo;
        themeAssets.icon = "autumn";
        break;
      }
      case "winter": {
        themeAssets.image = winterTheme.image;
        themeAssets.logo = winterTheme.logo;
        themeAssets.icon = "winter";
        break;
      }

      default:
        break;
    }
    return themeAssets;
  });

  return { theme, changeTheme, fullTheme, themeColors, themeLoading };
});
