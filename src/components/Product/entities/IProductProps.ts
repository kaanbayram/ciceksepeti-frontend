import { IProduct } from "src/store/states/Products/entities";

interface IProductProps extends IProduct {
    basketCount: number;
}

export type { IProductProps };