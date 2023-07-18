import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { BasketOrderButton } from "../BasketOrderButton/BasketOrderButton";
import { BasketList } from "../BasketList/BasketList";
import { useSelector } from "react-redux";
import { getSelected } from "../../../../store/selectors";

export const Basket = () => {
    const selectedGoods = useSelector(getSelected);
    return (
        <Grid item xs={4}>
            <Paper>
                <Box p={1}>
                    <Typography variant="h5" gutterBottom>
                        Ваш заказ
                    </Typography>
                    {selectedGoods.length ? (
                        <>
                            <BasketList />
                            <BasketOrderButton />
                        </>
                    ) : (
                        <Typography variant="subtitle1" gutterBottom>
                            Корзина пустует
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Grid>
    );
};
