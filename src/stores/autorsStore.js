import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './autorsStoreSaga';

function storeReducer(state = { autors: null, fetching: true }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      autors: state.autors,
      fetching: true,
    };
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      autors: state.autors,
      fetching: false,
    };
  }
  if (action.type == 'SETNEWAUTORS') {
    return {
      autors: action.newAutors,
      fetching: state.fetching,
    };
  }
}

const sagaMiddleware = createSagaMiddleware();
const autorsStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default autorsStore;
