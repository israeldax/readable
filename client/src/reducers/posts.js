import {RECEIVE_DATA} from '../actions/shared'
import {ADD_POST, EDIT_POST, REMOVE_POST, UPVOTE, DOWNVOTE} from '../actions/posts'
import {ADD_COMMENT, DELETE_COMMENT} from '../actions/comments'

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...action.posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case EDIT_POST:
      return {
        ...state,
        [action.post.id]: action.post
      }
    case REMOVE_POST:
      const { [action.id]:value, ...newState } = state
      return newState
    case UPVOTE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: state[action.id].voteScore + 1
        }
      }
    case DOWNVOTE:
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
        [action.postId]: {
          ...state[action.postId],
          commentCount : state[action.postId].commentCount + 1
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          commentCount: state[action.postId].commentCount - 1
        }
      }
    default:
      return state
  }
}

export default posts
