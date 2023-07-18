import {AppAction} from "../../app/store";
import {
    clearSelection as clearSelectionState,
    selectGood as selectGoodState,
    unselectGood as unselectGoodState } from "./basketSlice";

export const selectGood = (selectedId: string): AppAction<Promise<void>> => (dispatch) => {
    return dispatch(selectGoodState(selectedId));
};

export const unselectGood = (selectedId: string): AppAction<Promise<void>> => (dispatch) => {
    return dispatch(unselectGoodState(selectedId));
};

export const clearSelected = (): AppAction<Promise<void>> => (dispatch) => {
    return dispatch(clearSelectionState());
};
