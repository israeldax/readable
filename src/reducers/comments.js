import {
  RECEIVE_COMMENTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions/comments'

const comments = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        ...action.comments
      }
    case UP_VOTE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1
        }
      }
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore - 1
        }
      }
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    case EDIT_COMMENT:
        return {
          ...state,
          [action.comment.id]: action.comment
        }
    case DELETE_COMMENT:
      const { [action.id]:value, ...newState } = state
      return newState
    default:
      return state
  }
}

export default comments