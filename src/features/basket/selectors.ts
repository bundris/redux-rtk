import { RootState } from "../../app/store";
export const getSelected = (state: RootState) => state.selectedGoods.list;