import {RECEIVE_FILTERED_POSTS} from '../actions/filteredPosts'

const filteredPosts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FILTERED_POSTS:
      return action.posts
    default:
      return state
  }
}

export default filteredPosts
