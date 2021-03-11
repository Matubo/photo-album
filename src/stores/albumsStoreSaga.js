import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import getAlbums from '../requests/getAlbums';
import getPhotos from '../requests/getPhotos';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* fetchAlbums(action) {
  yield put({ type: 'STARTFETCHING' });
  let albumGetResult = yield call(() => {
    return getAlbums(action.id);
  });
  let formateAlbumsData = [];
  if (albumGetResult.error) {
    yield put({ type: 'SETFETCHINGERROR' });
    formateAlbumsData.push({
      userId: 'fetch error',
      id: 'fetch error',
      url: 'fetch error',
      title: 'fetch error',
    });
  } else {
    let albumsData = albumGetResult.result;
    let albumsIdList = albumsData.map((elem) => elem['id']);
    let photoGetResult = yield call(() => {
      return getPhotos(albumsIdList);
    });
    //////////
    if (photoGetResult.error) {
      formateAlbumsData.push({
        userId: 'fetch error',
        id: 'fetch error',
        url: 'fetch error',
        title: 'fetch error',
      });
    } else {
      let photosData = photoGetResult.result;
      console.log('url list' + photoGetResult);
      for (let i = 0; i < albumsData.length; i++) {
        formateAlbumsData.push({
          userId: albumsData[i]['userId'],
          id: albumsData[i]['id'],
          title: albumsData[i]['title'],
          url: photosData[i][0]['thumbnailUrl'],
        });
      }
    }
  }

  yield put({ type: 'SETNEWALBUMS', newAlbums: formateAlbumsData });
  yield put({ type: 'FINISHFETCHING' });
}

function* sage() {
  yield takeLatest('GETNEWALBUMS', fetchAlbums);
}

export default sage;
