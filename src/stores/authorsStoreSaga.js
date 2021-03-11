import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAutors from '../requests/getAuthors';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAutors(action) {
  yield put({ type: 'STARTFETCHING' });
  let authorGetResult = yield call(() => {
    return getAutors();
  });
  let formateResult = [];
  if (!authorGetResult.error) {
    let data = authorGetResult.result;
    data.forEach((element) => {
      formateResult.push({ username: element['username'], id: element['id'] });
    });
  } else {
    yield put({ type: 'SETFETCHINGERROR' });
    formateResult.push({ username: 'fetch error', id: 'fetch error' });
  }
  yield put({ type: 'SETNEWAUTHORS', newAuthors: formateResult });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWAUTHORS', fetchAutors);
}

export default sage;
