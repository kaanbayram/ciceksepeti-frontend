import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import { products } from './states/Products/Products';
import { general } from './states/General/General';
import { filters } from './states/Filters/Filters';
import { basket } from './states/Basket/Basket';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const rootReducers = combineReducers({
  products,
  filters,
  general,
  basket
})

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducers,
    middleware,
  })
  sagaMiddleware.run(saga)
  return store
}