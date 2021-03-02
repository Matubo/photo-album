import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAutors from '../requests/getAutors';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAutors(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getAutors();
  });
  console.log(data);
  let formateData = [];
  data.forEach((element) => {
    formateData.push({ username: element['username'], id: element['id'] });
  });
  console.log(formateData);
  yield put({ type: 'SETNEWAUTORS', newAutors: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWAUTORS', fetchAutors);
}

export default sage;
