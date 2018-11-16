import {RECEIVE_COMMENTS, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, ADD_COMMENT, DELETE_COMMENT} from '../actions/comments'

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments
    case UP_VOTE_COMMENT:
      return state.map(c => c.id !== action.id ? c :
        Object.assign({}, c, {voteScore: c.voteScore + 1}))
    case DOWN_VOTE_COMMENT:
      return state.map(c => c.id !== action.id ? c :
        Object.assign({}, c, {voteScore: c.voteScore - 1}))
    case ADD_COMMENT:
        return state.concat([action.comment])
    case DELETE_COMMENT:
      return state.filter(c => c.id !== action.id)
    default:
      return state
  }
}

export default comments