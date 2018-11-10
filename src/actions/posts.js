import * as readableAPI from '../Util/readableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RESET_POSTS_LOADING = 'RESET_POSTS_LOADING'

export const receive_posts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const reset_posts_loading = () => ({ type: RESET_POSTS_LOADING })

export const fetchPosts = () => async dispatch => {
  try {
    const posts = await readableAPI.getPosts()
    dispatch(receive_posts(posts))
  } catch (err) {
    console.log(err) //TODO: Tratar erro
  }
}
