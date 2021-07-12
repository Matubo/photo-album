import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

function storeReducer(
  state = {
    fetching: true,
    fetchingError: false,
  },
  action
) {
  if (action.type == 'STARTFETCHING') {
    return {
      ...state,
      fetching: true,
      fetchingError: false,
    };
  }

  if (action.type == 'SETFETCHINGERROR') {
    return {
      ...state,
      fetchingError: true,
    };
  }

  if (action.type == 'FINISHFETCHING') {
    return {
      ...state,
      fetching: false,
    };
  }

  if (action.type == 'SETNEWALBUMS') {
    return {
      ...state,
      albums: action.newAlbums,
    };
  }

  if (action.type == 'SETNEWPHOTOS') {
    return {
      ...state,
      photos: action.newPhotos,
    };
  }

  if (action.type == 'SETNEWAUTHORS') {
    return {
      ...state,
      authors: action.newAuthors,
    };
  }

  if (action.type == 'GETNEWALBUMS') {
    return state;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
