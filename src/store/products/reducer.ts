import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../models/IProduct";
import {IProductDiscription} from "../../models/IProductDiscription";

interface IProductsState {
    all: IProduct[];
    currentProduct: IProductDiscription | null;
    productFilter: string;
}

const initialState: IProductsState = {
    all: [],
    currentProduct: null,
    productFilter: '',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.all = action.payload;
        },
        setCurrentProduct: (state, action: PayloadAction<IProductDiscription | null>) => {
            state.currentProduct = action.payload;
        },
        setProductFilter: (state, action: PayloadAction<string>) => {
            state.productFilter = action.payload;
        }
    },
})
