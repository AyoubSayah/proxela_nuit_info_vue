import { useThemeStore } from "@/stores/theme";
import ShadeGenerator, { type Shade } from "shade-generator";
import { watchEffect } from "vue";
import type { Ttheme } from "../types/theme-type";
// @ts-ignore
const config: Record<Shade, number> = {
  "10": 0.9,
  "20": 0.8,
  "30": 0.7,
  "40": 0.6,
  "50": 0.5,
  "60": 0.4,
  "70": 0.3,
  "80": 0.2,
  "90": 0.1,
};

const useTheme = () => {
  const themeState = useThemeStore();
  let root = document.documentElement;

  const changeColors = (newTheme: Ttheme) => {
    root.style.setProperty(
      "--primary-color",
      themeState.themeColors[newTheme].primary
    );

    root.style.setProperty(
      "--secondary-color",
      themeState.themeColors[newTheme].secondary
    );

    root.style.setProperty(
      "--gray-color",
      themeState.themeColors[newTheme].gray
    );
    createShades("primary-color", themeState.themeColors[newTheme].primary);
    createShades("secondary-color", themeState.themeColors[newTheme].secondary);
  };
  const createShades = (cssvariable: string, hueColor: string) => {
    const listOfShades: Shade[] = [
      "30",
      "60",
      "70",
      "80",
      "90",
      "200",
      "300",
      "400",
    ];
    listOfShades.forEach((shade) => {
      root.style.setProperty(
        `--${cssvariable}-${shade}`,
        ShadeGenerator.hue(hueColor).shade(shade).hex()
      );
    });
  };
  watchEffect(() => {
    changeColors(themeState.theme);
  });
};

export default useTheme;
