import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './photosStoreSaga';

function storeReducer(state = { photos: null, fetching: true }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      photos: state.photos,
      fetching: true,
    };
  }

  if (action.type == 'FINISHFETCHING') {
    return {
      photos: state.photos,
      fetching: false,
    };
  }

  if (action.type == 'SETNEWPHOTOS') {
    return {
      photos: action.newPhotos,
      fetching: state.fetching,
    };
  }

  if (action.type == 'GETNEWPHOTOS') {
    return state;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();
const photosStore = createStore(storeReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default photosStore;
