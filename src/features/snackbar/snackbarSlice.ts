import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    isOpen: boolean;
}

const initialState: InitialState = {
    isOpen: false
};

const snackbarSlice = createSlice({
    name: 'snackbarStatus',
    initialState,
    reducers: {
        showSnackbar: (state)=> {
            state.isOpen = true;
        },
        hideSnackbar: (state)=> {
            state.isOpen = false;
        }
    }
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;