import { Button, CardActionArea, CardActions } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import React, { FC } from "react";
import { GoodsItem } from "../../../../app/types";
import {useDispatch} from "react-redux";
import {Dispatch} from "../../../../app/store";
import { selectGood } from "../../../basket/actions";

interface Props {
    item: GoodsItem;
    selected: boolean;
}
export const GoodCard: FC<Props> = ({ item, selected }) => {
    const dispatch = useDispatch<Dispatch>();

    const addGoodsItem = (id: string) => {
        dispatch(selectGood(id));
    };

    return (
        <Card
            onClick={() => {
                if (!selected) {
                    addGoodsItem(item.id);
                }
            }}
        >
            <CardActionArea>
                <CardMedia component="img" image={item.image} alt={item.name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.primary">
                        {item.price.toLocaleString("ru-RU", {
                            style: "currency",
                            currency: "RUB",
                            maximumFractionDigits: 0
                        })}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical"
                        }}
                    >
                        {item.info}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color={selected ? "success" : "primary"}
                    onClick={() => {
                        if (!selected) {
                            addGoodsItem(item.id);
                        }
                    }}
                >
                    {selected ? "в корзине" : "в корзину"}
                </Button>
            </CardActions>
        </Card>
    );
};
