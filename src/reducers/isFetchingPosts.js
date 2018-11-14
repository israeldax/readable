import {RECEIVE_POSTS, FETCH_POSTS} from '../actions/posts'

const isFetchingPosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return true
    case RECEIVE_POSTS:
      return false
    default:
      return state
  }
}

export default isFetchingPosts