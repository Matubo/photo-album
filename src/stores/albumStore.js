import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './albumStoreSaga';

function storeReducer(
  state = { albums: null, fetching: true, fetchingError: false },
  action
) {
  if (action.type == 'STARTFETCHING') {
    return {
      albums: state.albums,
      fetching: true,
      fetchingError: false,
    };
  }

  if (action.type == 'SETFETCHINGERROR') {
    return {
      albums: state.albums,
      fetching: state.fetching,
      fetchingError: true,
    };
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      albums: state.albums,
      fetching: false,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'SETNEWALBUMS') {
    return {
      albums: action.newAlbums,
      fetching: state.fetching,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'GETNEWALBUMS') {
    return state;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const albumStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default albumStore;
