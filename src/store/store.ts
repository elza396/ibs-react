import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from "./products/reducer";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
