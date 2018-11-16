import {RECEIVE_POSTS, ADD_POST, REMOVE_POST, UPVOTE, DOWNVOTE} from '../actions/posts'

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_POST:
      return state.concat([action.post])
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id)
    case UPVOTE:
      return state.map(p => p.id !== action.id ? p :
        Object.assign({}, p, {voteScore: p.voteScore + 1}))
    case DOWNVOTE:
      return state.map(p => p.id !== action.id ? p :
        Object.assign({}, p, {voteScore: p.voteScore - 1}))
    default:
      return state
  }
}

export default posts
