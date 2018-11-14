import {RECEIVE_FILTERED_POSTS, FETCH_FILTERED_POSTS} from '../actions/filteredPosts'

const isFetchingPosts = (state = false, action) => {
  switch (action.type) {
    case FETCH_FILTERED_POSTS:
      return true
    case RECEIVE_FILTERED_POSTS:
      return false
    default:
      return state
  }
}

export default isFetchingPosts