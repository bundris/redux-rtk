export interface GoodsAPI {
  image: string;
  name: string;
  info: string;
  price: number;
}

export interface GoodsItem extends GoodsAPI {
  id: string;
}