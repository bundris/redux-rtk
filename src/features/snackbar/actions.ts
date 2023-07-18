import {
    showSnackbar as showSnackbarState,
    hideSnackbar as hideSnachbarState
} from "./snackbarSlice";
export const showSnackbar = () => {
    return showSnackbarState();
};
export const hideSnackbar = () => {
    return hideSnachbarState();
}