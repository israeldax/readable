import {FETCH_DATA, RECEIVE_DATA} from '../actions/shared'

const isFetchingInitialData = (state = false, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return true
    case RECEIVE_DATA:
      return false
    default:
      return state
  }
}

export default isFetchingInitialData