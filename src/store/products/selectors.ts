import {RootState} from "../store";
import {IProduct} from "../../models/IProduct";
import {IProductDiscription} from "../../models/IProductDiscription";

export const productsSelector = (state: RootState): IProduct[] =>  state.products.all;

export const currentProductSelector = (state: RootState): IProductDiscription | null =>  state.products.currentProduct;

export const filteredProductsSelector = (state: RootState): IProduct[] => {
    return state.products.all.filter(item => item.name.toLowerCase().includes(state.products.productFilter));
}

