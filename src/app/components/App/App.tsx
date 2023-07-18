import React from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header/Header";
import { GoodsList } from "../../../features/goods/components/GoodsList/GoodsList";
import { Basket } from "../../../features/basket/components/Basket/Basket";
import { SiteSnackbar } from "../../../features/snackbar/components/SiteSnackbar/SiteSnackbar";
import Grid from "@mui/material/Grid";

export const App = () => {
    return (
        <Box>
            <Header />
            <Grid container spacing={2}>
                <GoodsList />
                <Basket />
            </Grid>
            <SiteSnackbar />
        </Box>
    );
};
