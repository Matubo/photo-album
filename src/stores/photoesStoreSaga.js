import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getPhotoes from '../requests/getPhotoes';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchPhotoes(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getPhotoes(action.id);
  });
  console.log(data);
  let formateData = [];
  data.forEach((element) => {
    formateData.push({ url: element['url'], id: element['id'] });
  });
  console.log(formateData);
  yield put({ type: 'SETNEWPHOTOES', newPhotoes: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWPHOTOES', fetchPhotoes);
}

export default sage;
