import {RECEIVE_POSTS, ADD_POST, REMOVE_POST} from '../actions/posts'

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case ADD_POST:
      return state.concat([action.post])
    case REMOVE_POST:
      return state.filter(p => p.id !== action.id)
    default:
      return state
  }
}

export default posts
