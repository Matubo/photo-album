import { put, takeLatest, select } from 'redux-saga/effects';
import fetchAuthors from './authorSaga';
import fetchPhotos from './photoSaga';
import fetchAlbums from './albumSaga';
import setPreviousStage from './stageSaga';

function* saga() {
  yield takeLatest('GETNEWAUTHORS', fetchAuthors);
  yield takeLatest('GETNEWALBUMS', fetchAlbums);
  yield takeLatest('GETNEWPHOTOS', fetchPhotos);
  yield takeLatest('SETPREVIOUSSTAGE', setPreviousStage);
}

export default saga;
