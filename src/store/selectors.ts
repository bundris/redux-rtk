import { RootState } from "../../app/store";

export const getGoods = (state: RootState) => state.goods.list;

export const getSelected = (state: RootState) => state.selectedGoods.list;

