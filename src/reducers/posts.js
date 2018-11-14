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
      const newState = state.slice()
      const index = newState.findIndex(p => p.id === action.id)
      newState[index].voteScore += 1
      return newState
    case DOWNVOTE:
      const posts = state.slice()
      const position = posts.findIndex(p => p.id === action.id)
      posts[position].voteScore -= 1
      return posts
    default:
      return state
  }
}

export default posts
