import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GoodsItem } from "../../app/types";

interface InitialState {
    list: GoodsItem[];
}

const initialState: InitialState = {
    list: []
};

const goodsSlice = createSlice({
    name:'goods',
    initialState,
    reducers: {
        setGoods: (state, action: PayloadAction<GoodsItem[]>) => {
            state.list = action.payload;
        }
    }
});

export const { setGoods } = goodsSlice.actions;
export default goodsSlice.reducer;