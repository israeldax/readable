import {FETCH_COMMENTS, RECEIVE_COMMENTS} from '../actions/comments'

const isFetchingComments = (state = false, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return true
    case RECEIVE_COMMENTS:
      return false
    default:
      return state
  }
}

export default isFetchingComments
