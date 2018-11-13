import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import filteredPosts from './filteredPosts'
import loadingPosts from './loadingPosts'
import loadingFilteredPosts from './loadingFilteredPosts'
import sortingby from './sortingby'

export default combineReducers({categories, posts, loadingPosts, filteredPosts, loadingFilteredPosts, sortingby})