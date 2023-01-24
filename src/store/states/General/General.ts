import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { IGeneral } from './entities';
import { IAction } from '../..';

const initialStateValue: IGeneral = { loading: false };

export const GeneralSlice = createSlice({
    name: 'general',
    initialState: initialStateValue,
    reducers: {
        updateLoading: (state, action) =>
            produce(state, (draft) => changeLoading(draft, action)),
    },
})



const changeLoading = (draft: IGeneral, action: IAction) => {
    draft.loading = action.payload;
}

export const general = GeneralSlice.reducer
export const { updateLoading } = GeneralSlice.actions
