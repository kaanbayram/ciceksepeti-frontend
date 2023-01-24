import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios';
import { BaseActionTypes } from "../actionTypes";
import { addProducts, updateLoading } from '..';

export function* productSaga() {
    yield takeEvery(BaseActionTypes.GET_PRODUCTS, getProducts);
}


function* getProducts(): any {
    try {
        yield put(updateLoading(true));
        const { data }: any = yield call(axios.get, 'https://ciceksepeti-backend-lkmcqzfzf-kaanbayram.vercel.app/api/products');
        yield put(addProducts(data));
    } catch (e: any) {
        console.log(e);
    }
    finally {
        yield put(updateLoading(false));
    }
}
