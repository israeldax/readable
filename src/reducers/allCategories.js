import {RECEIVE_CATEGORIES} from '../actions/categories'

const allCategories = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return state.concat(action.allCategories)
    default:
      return state
  }
}

export default allCategories
