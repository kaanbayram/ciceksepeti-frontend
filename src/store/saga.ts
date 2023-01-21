import { call, takeEvery, put, all } from 'redux-saga/effects'
// export const addTodoAsync = createAction();

export default function* rootSaga() {
  yield all([generalSaga()])
}

function* generalSaga() {
  yield takeEvery('MAIN', mainSaga)
}

export function* mainSaga() {
  try {
  } catch (e) {}
}
