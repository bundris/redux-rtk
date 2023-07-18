import { RootState } from "../../app/store";
export const getGoods = (state: RootState) => state.goods.list;