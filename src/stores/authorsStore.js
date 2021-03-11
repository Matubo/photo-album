import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './authorsStoreSaga';

function storeReducer(
  state = { authors: null, fetching: true, fetchingError: false },
  action
) {
  if (action.type == 'STARTFETCHING') {
    return {
      authors: state.authors,
      fetching: true,
      fetchingError: false,
    };
  }

  if (action.type == 'SETFETCHINGERROR') {
    return {
      authors: state.authors,
      fetching: state.fetching,
      fetchingError: true,
    };
  }

  if (action.type == 'FINISHFETCHING') {
    return {
      authors: state.authors,
      fetching: false,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'SETNEWAUTHORS') {
    return {
      authors: action.newAuthors,
      fetching: state.fetching,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'GETNEWAUTHORS') {
    return state;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const authorsStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default authorsStore;
