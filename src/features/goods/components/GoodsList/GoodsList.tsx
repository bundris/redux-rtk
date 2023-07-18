import Grid from "@mui/material/Grid";
import { GoodCard } from "../GoodCard/GoodCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../../app/store";
import { getGoods, getSelected } from "../../../../store/selectors";
import { setGoods } from "../../actions";

export const GoodsList = () => {
    const dispatch = useDispatch<Dispatch>();
    const goods = useSelector(getGoods);
    const selectedGoods = useSelector(getSelected);
    useEffect(() => {
        dispatch(setGoods());
    }, []);
    return (
        <Grid item xs={8}>
            <Grid container spacing={2}>
                {goods.map((item) => {
                    const selected = selectedGoods.includes(item.id);
                    return (
                        <Grid item xs={6} key={item.id}>
                            <GoodCard item={item} selected={selected} />
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};
