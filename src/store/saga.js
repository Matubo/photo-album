import { takeLatest } from 'redux-saga/effects';
import fetchAuthors from './authorSaga';
import fetchPhotos from './photoSaga';
import fetchAlbums from './albumSaga';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

function* saga() {
  yield takeLatest('GETNEWAUTHORS', fetchAuthors);
  yield takeLatest('GETNEWALBUMS', fetchAlbums);
  yield takeLatest('GETNEWPHOTOS', fetchPhotos);
}

export default saga;
