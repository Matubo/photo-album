import { call, put, takeLatest } from 'redux-saga/effects';
import getPhotos from '../requests/getPhotos';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchPhotos(action) {
  yield put({ type: 'STARTFETCHING' });
  let photoGetResult = yield call(() => {
    return getPhotos(action.id);
  });
  let formateData = [];
  if (photoGetResult.error) {
    yield put({ type: 'SETFETCHINGERROR' });
    formateData.push({
      url: 'fetch error',
      id: 'fetch error',
      title: 'fetch error',
    });
  } else {
    let data = photoGetResult.result;
    data.forEach((element) => {
      formateData.push({
        url: element['url'],
        id: element['id'],
        title: element['title'],
      });
    });
    console.log(data);
  }
  console.log(formateData);
  yield put({ type: 'SETNEWPHOTOS', newPhotos: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWPHOTOS', fetchPhotos);
}

export default sage;
