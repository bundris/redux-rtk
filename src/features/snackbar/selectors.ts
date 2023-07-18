import { RootState } from "../../app/store";
export const getSnackbarStatus = (state: RootState) => state.openSnackbar.isOpen;
