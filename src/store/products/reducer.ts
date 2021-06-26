import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../models/IProduct";
import {IProductDiscription} from "../../models/IProductDiscription";

interface IProductsState {
    products: IProduct[];
    currentProduct: IProductDiscription | null;
}

const initialState: IProductsState = {
    products: [],
    currentProduct: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload;
        },
        setCurrentProduct: (state, action: PayloadAction<IProductDiscription | null>) => {
            state.currentProduct = action.payload;
        }
    },
})
