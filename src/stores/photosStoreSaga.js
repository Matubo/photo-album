import { call, put, takeLatest } from 'redux-saga/effects';
import getPhotos from '../requests/getPhotos';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchPhotos(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getPhotos(action.id);
  });
  console.log(data);
  let formateData = [];
  data.forEach((element) => {
    formateData.push({ url: element['url'], id: element['id'] });
  });
  console.log(formateData);
  yield put({ type: 'SETNEWPHOTOS', newPhotos: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWPHOTOS', fetchPhotos);
}

export default sage;
