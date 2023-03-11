import { ITheme } from "@poc/interfaces";
import { ThemeActionTypeEnum } from "./interface";

export const actionChangeTheme = (theme:ITheme) => {
  return {
    type: ThemeActionTypeEnum.CHANGE_THEME,
    payload: theme
  }
}