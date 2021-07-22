import { put, select } from 'redux-saga/effects';

const currentStage = (store) => store.stage;

function* setPreviousStage() {
  let stage = yield select(currentStage);
  if (stage > 1) {
    yield put({ type: 'SETSTAGE', newStage: stage - 1 });
  }
}

export default setPreviousStage;
