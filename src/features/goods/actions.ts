import {GoodsAPI, GoodsItem} from "../../app/types";
import {collection, getDocs, getFirestore} from "firebase/empty-import";
import {AppAction} from "../../app/store";
import { setGoods  as setGoodsState} from "./goodsSlice";
export const apiGetGoods = async (): Promise<GoodsItem[]> => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "food-goods"));
    const result: GoodsItem[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data() as GoodsAPI;
        result.push({ id: doc.id, ...data });
    });
    return result;
};

export const setGoods = (): AppAction<Promise<void>> => (dispatch) => {
    return apiGetGoods().then(goods => {
        dispatch(setGoodsState(goods));
    });
};