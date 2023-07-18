import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../../app/store";
import { getSnackbarStatus } from "../../selectors";
import { hideSnackbar } from "../../actions";

export const SiteSnackbar = () => {
    const dispatch = useDispatch<Dispatch>();
    const isOpenSnackbar = useSelector(getSnackbarStatus);
    const closeSnackbar = () => {
        dispatch(hideSnackbar());
    };
    return (
        <Snackbar
            open={isOpenSnackbar}
            autoHideDuration={6000}
            onClose={closeSnackbar}
        >
            <Alert onClose={closeSnackbar} severity="success" sx={{ width: "100%" }}>
                Оплачено!
            </Alert>
        </Snackbar>
    );
};
