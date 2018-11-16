import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import filteredPosts from './filteredPosts'
import isFetchingPosts from './isFetchingPosts'
import isFetchingComments from './isFetchingComments'
import isFetchingFilteredPosts from './isFetchingFilteredPosts'
import sortingby from './sortingby'

export default combineReducers({
  categories,
  posts,
  isFetchingPosts,
  comments,
  isFetchingComments,
  filteredPosts,
  isFetchingFilteredPosts,
  sortingby
})