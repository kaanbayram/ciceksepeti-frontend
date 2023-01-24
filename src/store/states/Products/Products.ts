import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from './entities';
import { IAction } from '../..';

const initialStateValue: IProduct[] = [];

export const ProductSlice = createSlice({
    name: 'products',
    initialState: initialStateValue,
    reducers: {
        addProducts: (state, action) => addAllProduct(state, action)
    },
})



const addAllProduct = (state: IProduct[], action: IAction) => {
    return[...action.payload]
}

export const products = ProductSlice.reducer
export const { addProducts } = ProductSlice.actions