import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../../app/store";
import { clearSelected } from "../../actions";
import { showSnackbar } from "../../../snackbar/actions";
import { getSelected } from "../../selectors";
import { getGoods } from "../../../goods/selectors";
export const BasketOrderButton = () => {
    const dispatch = useDispatch<Dispatch>();
    const goods = useSelector(getGoods);
    const selectedGoods = useSelector(getSelected);
    const openSnackbar = () => {
        dispatch(showSnackbar());
    };

    const pay = () => {
        openSnackbar();
        dispatch(clearSelected());
    };
    return (
        <Button variant="contained" size="large" fullWidth onClick={pay}>
            Оплатить{" "}
            {selectedGoods
                .reduce((sum, id) => {
                    const goodsItem = goods.find((item) => item.id === id);

                    return sum + (goodsItem ? goodsItem.price : 0);
                }, 0)
                .toLocaleString("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    maximumFractionDigits: 0
                })}
        </Button>
    );
};
