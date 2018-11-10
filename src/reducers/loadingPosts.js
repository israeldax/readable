import {RECEIVE_POSTS, RESET_POSTS_LOADING} from '../actions/posts'

const loadingFilteredPosts = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return false
    case RESET_POSTS_LOADING:
      return true
    default:
      return state
  }
}

export default loadingFilteredPosts