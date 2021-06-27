import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "../../constants/API";
import {IProduct} from "../../models/IProduct";
import {productsSlice} from "./reducer";
import {requestsSlice} from "../requests/reducer";

export const loadProducts = () => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch(requestsSlice.actions.increaseCount());
        const response = await axios.get(`${API_URL}item`);
        dispatch(productsSlice.actions.setProducts(response.data.content as IProduct[]));
    } catch (error) {
        console.error(error);
    } finally {
        dispatch(requestsSlice.actions.decreaseCount());
    }
}

export const loadProductById = (productId: string) => async (dispatch: Dispatch): Promise<void> => {
    try {
        dispatch(requestsSlice.actions.increaseCount());
        const response = await axios.get(`${API_URL}item/${productId}`);
        dispatch(productsSlice.actions.setCurrentProduct(response.data.content));
    } catch (error) {
        console.error(error);
    } finally {
        dispatch(requestsSlice.actions.decreaseCount());
    }
}
