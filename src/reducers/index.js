import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import filteredPosts from './filteredPosts'
import isFetchingPosts from './isFetchingPosts'
import isFetchingFilteredPosts from './isFetchingFilteredPosts'
import sortingby from './sortingby'

export default combineReducers({categories, posts, isFetchingPosts, filteredPosts, isFetchingFilteredPosts, sortingby})