import {combineReducers} from 'redux'
import categories from './categories'
import allCategories from './allCategories'
import posts from './posts'
import allPosts from './allPosts'
import comments from './comments'
import allComments from './allComments'
import filteredPosts from './filteredPosts'
import isFetchingPosts from './isFetchingPosts'
import isFetchingComments from './isFetchingComments'
import isFetchingFilteredPosts from './isFetchingFilteredPosts'
import sortingby from './sortingby'

export default combineReducers({
  categories,
  allCategories,
  isFetchingPosts,
  posts,
  allPosts,
  isFetchingComments,
  comments,
  allComments,
  filteredPosts,
  isFetchingFilteredPosts,
  sortingby
})