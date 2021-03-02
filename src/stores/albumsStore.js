import { createStore } from 'redux'

function mainStore(state = { albums: null, fetching: false }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      albums: state.albums,
      fetching: true,
    }
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      albums: state.albums,
      fetching: false,
    }
  }
  if (action.type == 'SETNEWALBUMS') {
    return {
      albums: action.newAlbums,
      fetching: state.fetching,
    }
  }
}

export default mainStore
