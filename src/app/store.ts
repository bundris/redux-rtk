import { configureStore, ThunkDispatch, ThunkAction, PayloadAction } from "@reduxjs/toolkit";
import goodsReducer from "../features/goods/goodsSlice";
import basketReducer from "../features/basket/basketSlice";
import snackbarReducer from "../features/snackbar/snackbarSlice";

export const store = configureStore({
   reducer: {
       goods: goodsReducer,
       selectedGoods: basketReducer,
       openSnackbar: snackbarReducer
   }
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ThunkDispatch<RootState, unknown, PayloadAction>;
export type AppAction<R> = ThunkAction<R, RootState, unknown, PayloadAction>;
