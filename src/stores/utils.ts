import { springTheme } from "@/utils/data/IntialTheme";
import type {
  ICustomTheme,
  Itheme,
  IThemeColor,
} from "@/utils/types/InterfaceTheme";

export const setCustomTheme = (
  customTheme: ICustomTheme,
  themeAssets: Itheme,
  themeColors: IThemeColor
) => {
  customTheme.logo =
    customTheme.logo !== "" ? customTheme.logo : themeAssets.logo;

  customTheme.animationItem =
    customTheme.animationItem !== ""
      ? customTheme.animationItem
      : themeAssets.icon;

  customTheme.image =
    customTheme.image !== "" ? customTheme.image : themeAssets.image;
  themeAssets.image = customTheme.image;
  themeAssets.logo = customTheme.logo;
  themeAssets.icon = customTheme.animationItem;
  themeColors.custom.primary = customTheme.primaryColor;
  themeColors.custom.secondary = customTheme.secondaryColor;
  localStorage.setItem("customTheme", JSON.stringify(customTheme));
};
export const initCustomTheme = (
  themeAssets: Itheme,
  themeColors: IThemeColor
) => {
  const customTheme = JSON.parse(
    localStorage.getItem("customTheme") as string
  ) as ICustomTheme;
  themeAssets.image = customTheme.image ? customTheme.image : springTheme.image;
  themeAssets.logo = customTheme.logo ? customTheme.logo : springTheme.logo;
  themeAssets.icon = customTheme.animationItem
    ? customTheme.animationItem
    : springTheme.icon;
  themeColors.custom.primary = customTheme.primaryColor;
  themeColors.custom.secondary = customTheme.secondaryColor;
};
