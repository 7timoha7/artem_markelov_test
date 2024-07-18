import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {ProductType} from "../../types";
import {productsFetch} from "./productsThinks";


interface ProductsState {
  products: ProductType | null;
  loading: boolean;
  error: boolean;
}

const initialState: ProductsState = {
  products: null,
  loading: false,
  error: false,
};
export const productsSLice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(productsFetch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const productsReducer = productsSLice.reducer;

export const selectProductsState = (state: RootState) => state.products.products;
export const selectProductsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;