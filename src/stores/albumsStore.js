import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './albumsStoreSaga';

function storeReducer(state = { albums: null, fetching: true }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      albums: state.albums,
      fetching: true,
    };
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      albums: state.albums,
      fetching: false,
    };
  }
  if (action.type == 'SETNEWALBUMS') {
    return {
      albums: action.newAlbums,
      fetching: state.fetching,
    };
  }
  if (action.type == 'GETNEWALBUMS') {
    return {
      albums: state.albums,
      fetching: state.fetching,
    };
  }
}

const sagaMiddleware = createSagaMiddleware();
const albumsStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default albumsStore;
