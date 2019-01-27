import {RECEIVE_DATA} from '../actions/shared'

const allCategories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return state.concat(action.allCategories)
    default:
      return state
  }
}

export default allCategories
