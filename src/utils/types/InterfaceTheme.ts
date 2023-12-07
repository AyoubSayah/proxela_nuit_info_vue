import type { Shade } from "shade-generator";
import type { Ttheme } from "./theme-type";

export interface IcolorsType {
  primary: string;
  secondary: string;
  gray: string;
}
export type IThemeColor = {
  [key in Ttheme]: IcolorsType;
};
export interface Itheme {
  image: string;
  logo: string;
  icon?: string;
}
export interface ICustomTheme {
  logo: string;
  animationItem: string | undefined;
  primaryColor: string;
  secondaryColor: string;
  image: string;
}
