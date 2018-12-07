import {RECEIVE_POSTS, ADD_POST, REMOVE_POST, UPVOTE, DOWNVOTE} from '../actions/posts'

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      } 
    case ADD_POST:
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
    default:
      return state
  }
}

export default posts
