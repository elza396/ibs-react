import {RootState} from "../store";
import {IProduct} from "../../models/IProduct";
import {IProductDiscription} from "../../models/IProductDiscription";

export const productsSelector = (state: RootState): IProduct[] =>  state.products.products;

export const currentProductSelector = (state: RootState): IProductDiscription | null =>  state.products.currentProduct;
