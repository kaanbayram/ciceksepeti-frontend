import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { IFilters } from './entities';
import { IAction } from '../..';

const initialStateValue: IFilters = { category: "all", searchWord: "" }

export const FiltersSlice = createSlice({
    name: 'filters',
    initialState: initialStateValue,
    reducers: {
        changeCategory: (state, action) =>
            produce(state, (draft) => updateCategory(draft, action)),
        setSearchWord: (state, action) =>
            produce(state, (draft) => setSearchKey(draft, action)),
        resetFilters: (state, action) => factoryFilters(state, action),
    },
})

const updateCategory = (draft: IFilters, action: IAction) => {
    draft.category = action.payload;
}

const setSearchKey = (draft: IFilters, action: IAction) => {
    draft.category = "all";
    draft.searchWord = action.payload;
}

const factoryFilters = (draft: IFilters, action: IAction) => {
    return initialStateValue;
}

export const filters = FiltersSlice.reducer
export const { changeCategory, resetFilters, setSearchWord } = FiltersSlice.actions
