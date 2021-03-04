import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAlbums from '../requests/getAlbums';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAutors(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getAlbums(action.id);
  });
  console.log(data);
  let formateData = [];
  data.forEach((element) => {
    formateData.push({ userId: element['userId'], id: element['id'] });
  });
  console.log(formateData);
  yield put({ type: 'SETNEWALBUMS', newAlbums: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWALBUMS', fetchAutors);
}

export default sage;
