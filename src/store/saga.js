import { put, takeLatest, select } from 'redux-saga/effects';
import fetchAuthors from './authorSaga';
import fetchPhotos from './photoSaga';
import fetchAlbums from './albumSaga';
// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`

const currentStage = (store) => store.stage;

function* setPreviousStage() {
  let stage = yield select(currentStage);
  if (stage > 1) {
    yield put({ type: 'SETSTAGE', newStage: stage - 1 });
  }
}

function* saga() {
  yield takeLatest('GETNEWAUTHORS', fetchAuthors);
  yield takeLatest('GETNEWALBUMS', fetchAlbums);
  yield takeLatest('GETNEWPHOTOS', fetchPhotos);
  yield takeLatest('SETPREVIOUSSTAGE', setPreviousStage);
}

export default saga;
