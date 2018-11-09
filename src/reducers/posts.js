import {RECEIVE_DATA} from '../actions/shared'

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.posts
    default:
      return state
  }
}

export default posts
