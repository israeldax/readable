import {CHANGE_SORTINGBY} from '../actions/sortingby'

const sortingby = (state = 'vote', action) => {
  switch (action.type) {
    case CHANGE_SORTINGBY:
      return action.sortby
    default:
      return state
  }
}

export default sortingby