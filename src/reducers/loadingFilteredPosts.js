import {RECEIVE_FILTERED_POSTS, RESET_FILTERED_POSTS_LOADING} from '../actions/filteredPosts'

const loadingFilteredPosts = (state = true, action) => {
  switch (action.type) {
    case RECEIVE_FILTERED_POSTS:
      return false
    case RESET_FILTERED_POSTS_LOADING:
      return true
    default:
      return state
  }
}

export default loadingFilteredPosts
