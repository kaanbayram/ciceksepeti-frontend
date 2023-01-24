import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { IBasketItem } from './entities';
import { IAction } from '../..';

const initialStateValue: IBasketItem[] = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket') as string) : [];

export const BasketSlice = createSlice({
    name: 'basket',
    initialState: initialStateValue,
    reducers: {
        addProduct: (state, action) =>
            produce(state, (draft) => add(draft, action)),
        removeProduct: (state, action) =>
            produce(state, (draft) => remove(draft, action)),
        setBasket: (state, action) => set(state, action),
    },
})

const set = (draft: IBasketItem[], action: IAction) => {
    return [...action.payload]
}
const add = (draft: IBasketItem[], action: IAction) => {
    draft.push(action.payload);
}

const remove = (draft: IBasketItem[], action: IAction) => {
}

export const basket = BasketSlice.reducer
export const { addProduct, removeProduct, setBasket } = BasketSlice.actions
