import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './authorsStoreSaga';

function storeReducer(state = { authors: null, fetching: true }, action) {
  if (action.type == 'GETNEWAUTHORS') {
    return state;
  }

  if (action.type == 'STARTFETCHING') {
    return {
      authors: state.authors,
      fetching: true,
    };
  }

  if (action.type == 'FINISHFETCHING') {
    return {
      authors: state.authors,
      fetching: false,
    };
  }

  if (action.type == 'SETNEWAUTHORS') {
    return {
      authors: action.newAuthors,
      fetching: state.fetching,
    };
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const authorsStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default authorsStore;
