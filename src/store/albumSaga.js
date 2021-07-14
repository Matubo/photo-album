import { call, put } from 'redux-saga/effects';
import getAlbums from '../requests/getAlbums';
import getPhotos from '../requests/getPhotos';

function* formateData(albumGetResult) {
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
      console.log(photoGetResult);
      for (let i = 0; i < albumsData.length; i++) {
        formateAlbumsData.push({
          userId: albumsData[i]['userId'],
          id: albumsData[i]['id'],
          title: albumsData[i]['title'],
          url: photosData[i][0]['thumbnailUrl'],
          length: photosData[i].length,
        });
      }
    }
  }

  return formateAlbumsData;
}

function* fetchAlbums(action) {
  const { id } = action;
  yield put({ type: 'STARTFETCHING' });
  let albumGetResult = yield call(() => {
    return getAlbums(id);
  });
  let formateAlbumsData = yield call(() => {
    return formateData(albumGetResult);
  });
  yield put({ type: 'SETNEWALBUMS', newAlbums: formateAlbumsData });
  yield put({ type: 'SETSTAGE', newStage: 2 });
  yield put({ type: 'FINISHFETCHING' });
}

export default fetchAlbums;
