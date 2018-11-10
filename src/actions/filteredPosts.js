import * as readableAPI from '../Util/readableAPI'

export const RECEIVE_FILTERED_POSTS = 'RECEIVE_FILTERED_POSTS'
export const RESET_FILTERED_POSTS_LOADING = 'RESET_FILTERED_POSTS_LOADING'

export const receive_filtered_posts = (posts) => ({
  type: RECEIVE_FILTERED_POSTS,
  posts,
  loadingFilteredPosts: false
})

export const reset_filtered_posts_loading = () => ({ type: RESET_FILTERED_POSTS_LOADING })

export const fetchFilteredPosts = filter => async dispatch => {
  try {
    const posts = await readableAPI.getFilteredPosts(filter)
    dispatch(receive_filtered_posts(posts))
  } catch (err) {
    console.log(err) //TODO: Tratar erro
  }
}