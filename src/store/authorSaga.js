import { call, put } from 'redux-saga/effects';
import getAuthors from '../requests/getAuthors';

function* fetchAuthors(action) {
  yield put({ type: 'STARTFETCHING' });
  let authorGetResult = yield call(() => {
    return getAuthors();
  });
  let formateResult = [];
  if (!authorGetResult.error) {
    let data = authorGetResult.result;
    data.forEach((element) => {
      formateResult.push({ username: element['username'], id: element['id'] });
    });
  } else {
    yield put({ type: 'SETFETCHINGERROR' });
    formateResult.push({ username: 'fetch error', id: 'fetch error' });
  }
  yield put({ type: 'SETNEWAUTHORS', newAuthors: formateResult });
  yield put({ type: 'FINISHFETCHING' });
}

export default fetchAuthors;
