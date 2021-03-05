import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAlbums from '../requests/getAlbums';
import getPhotoes from '../requests/getPhotoes';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAlbums(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getAlbums(action.id);
  });
  console.log(data);
  let formateData = [];
  let urlData = [];
  for (let i = 0; i < data.length; i++) {
    urlData = yield call(() => {
      return getPhotoes(data[i]['id']);
    });
    formateData.push({
      userId: data[i]['userId'],
      id: data[i]['id'],
      url: urlData[0]['thumbnailUrl'],
    });
  }
  console.log(formateData);
  yield put({ type: 'SETNEWALBUMS', newAlbums: formateData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWALBUMS', fetchAlbums);
}

export default sage;
