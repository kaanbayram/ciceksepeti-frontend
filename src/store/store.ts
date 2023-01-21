import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const rootReducers = combineReducers({})

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducers,
    middleware,
  })
  sagaMiddleware.run(saga)
  return store
}
