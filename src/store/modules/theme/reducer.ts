import { IActionGlobalState, ITheme } from "@poc/interfaces";
import { ThemeBase } from "@poc/theme";
import produce from "immer";
import { ThemeActionTypeEnum } from "./interface";

const INITIAL_STATE: {theme: ITheme} = {theme: ThemeBase.Midway};

export const themeReducer = (
  state = INITIAL_STATE,
  action: IActionGlobalState<ITheme>
 ) => {
  return produce(state, draft => {
    switch (action.type) {
      case ThemeActionTypeEnum.CHANGE_THEME: {
        draft.theme = action.payload
        break;
      }
    }
  })
}