import {combineReducers} from 'redux'
import allCategories from './allCategories'
import categories from './categories'
import isFetchingInitialData from './isFetchingInitialData'
import allPosts from './allPosts'
import posts from './posts'
import isFetchingComments from './isFetchingComments'
import allComments from './allComments'
import comments from './comments'
import sortingby from './sortingby'

export default combineReducers({
  isFetchingInitialData,
  allCategories,
  categories,
  allPosts,
  posts,
  isFetchingComments,
  allComments,
  comments,
  sortingby
})
