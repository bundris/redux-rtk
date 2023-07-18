import { GoodsItem } from "../../app/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
    list: GoodsItem["id"][];
}

const initialState: InitialState = {
    list: []
};

const selectedSlice = createSlice({
    name: "selectedGoods",
    initialState,
    reducers: {
        selectGood: (state, action:PayloadAction<string>) => {
            if (!state.list.includes(action.payload)) {
                state.list.unshift(action.payload);
            }
        },
        unselectGood: (state, action:PayloadAction<string>) => {
            state.list = state.list.filter((item) => item !== action.payload);
        },
        clearSelection: (state, action) => {
            state.list = [];
        }
    }
});

export const { selectGood, unselectGood, clearSelection } = selectedSlice.actions;
export default selectedSlice.reducer;