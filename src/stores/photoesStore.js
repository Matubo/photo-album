import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './photoesStoreSaga';

function storeReducer(state = { photoes: null, fetching: true }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      photoes: state.photoes,
      fetching: true,
    };
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      photoes: state.photoes,
      fetching: false,
    };
  }

  if (action.type == 'SETNEWPHOTOES') {
    return {
      photoes: action.newPhotoes,
      fetching: state.fetching,
    };
  }
  if (action.type == 'GETNEWPHOTOES') {
    return state;
  }
}

const sagaMiddleware = createSagaMiddleware();
const photoesStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default photoesStore;
