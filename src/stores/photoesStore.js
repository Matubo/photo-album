import { createStore } from 'redux'

function mainStore(state = { photoes: null, fetching: false }, action) {
  if (action.type == 'STARTFETCHING') {
    return {
      photoes: state.photoes,
      fetching: true,
    }
  }
  if (action.type == 'FINISHFETCHING') {
    return {
      photoes: state.photoes,
      fetching: false,
    }
  }

  if (action.type == 'SETNEWPHOTOES') {
    return {
      photoes: action.newPhotoes,
      fetching: state.fetching,
    }
  }
}

export default mainStore
