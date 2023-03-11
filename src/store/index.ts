import { configureStore } from '@reduxjs/toolkit'
import {themeReducer} from './modules/theme/reducer';

export const store = configureStore({ reducer: themeReducer })