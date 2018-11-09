import {RECEIVE_DATA} from '../actions/shared'

const categories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.categories
    default:
      return state
  }
}

export default categories
