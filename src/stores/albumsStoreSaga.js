import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAlbums from '../requests/getAlbums';
import getPhotos from '../requests/getPhotos';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAlbums(action) {
  yield put({ type: 'STARTFETCHING' });
  let data = yield call(() => {
    return getAlbums(action.id);
  });
  console.log(data);

  let idList = data.map((elem) => elem['id']);
  console.log(idList);
  let urlList = yield call(() => {
    return getPhotos(idList);
  });
  console.log('url list' + urlList);
  let formateData = [];
  for (let i = 0; i < data.length; i++) {
    formateData.push({
      userId: data[i]['userId'],
      id: data[i]['id'],
      url: urlList[i][0]['thumbnailUrl'],
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
