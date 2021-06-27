import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from "./products/reducer";
import {requestsSlice} from "./requests/reducer";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    requests: requestsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
