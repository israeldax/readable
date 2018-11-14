import * as readableAPI from '../Util/readableAPI'

export const FETCH_FILTERED_POSTS = 'FETCH_FILTERED_POSTS'
export const RECEIVE_FILTERED_POSTS = 'RECEIVE_FILTERED_POSTS'

const fetch_filtered_posts = () => ({ type: FETCH_FILTERED_POSTS })

const receive_filtered_posts = (posts) => ({
  type: RECEIVE_FILTERED_POSTS,
  posts
})

export const initFilteredPosts = filter => async dispatch => {
  dispatch(fetch_filtered_posts(filter))
  try {
    const posts = await readableAPI.getFilteredPosts(filter)
    dispatch(receive_filtered_posts(posts))
  } catch (err) {
    console.log(err) //TODO: Tratar erro
    dispatch(initFilteredPosts())
  }
}