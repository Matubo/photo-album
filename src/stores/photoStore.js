import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './photoStoreSaga';

function storeReducer(state = { photos: null, fetching: true }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      photos: state.photos,
      fetching: true,
    };
  }

  if (action.type == 'SETFETCHINGERROR') {
    return {
      photos: state.photos,
      fetching: state.fetching,
      fetchingError: true,
    };
  }

  if (action.type == 'FINISHFETCHING') {
    return {
      photos: state.photos,
      fetching: false,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'SETNEWPHOTOS') {
    return {
      photos: action.newPhotos,
      fetching: state.fetching,
      fetchingError: state.fetchingError,
    };
  }

  if (action.type == 'GETNEWPHOTOS') {
    return state;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const photoStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default photoStore;
