import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../../../app/store";
import { unselectGood } from "../../actions";
import { getSelected } from "../../selectors";
import { getGoods  } from "../../../goods/selectors";

export const BasketList = () => {
    const dispatch = useDispatch<Dispatch>();
    const selectedGoods = useSelector(getSelected);
    const goods = useSelector(getGoods);
    const removeGoodsItem = (id: string) => {
        dispatch(unselectGood(id));
    };
    return (
        <List dense>
            {selectedGoods.map((id) => {
                const goodsItem = goods.find((item) => item.id === id);

                if (!goodsItem) {
                    return null;
                }

                return (
                    <ListItem
                        key={goodsItem.id}
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => removeGoodsItem(goodsItem.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar alt={goodsItem.name} src={goodsItem.image} />
                        </ListItemAvatar>
                        <ListItemText primary={goodsItem.name} />
                    </ListItem>
                );
            })}
        </List>
    );
};
