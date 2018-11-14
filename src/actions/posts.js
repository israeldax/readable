import * as readableAPI from '../Util/readableAPI'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RESET_POSTS_LOADING = 'RESET_POSTS_LOADING'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

const receive_posts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

const add_post = (post) => ({
  type: ADD_POST,
  post
})

const remove_post = id => ({
  type: REMOVE_POST,
  id
})

const upVote = id => ({
  type: UPVOTE,
  id
})

const downVote = id => ({
  type: DOWNVOTE,
  id
})

export const reset_posts_loading = () => ({ type: RESET_POSTS_LOADING })

export const fetchPosts = () => async dispatch => {
  const posts = await readableAPI.getPosts()
  dispatch(receive_posts(posts))
}

export const savePost = post => async dispatch => {
  try{
    dispatch(add_post(post))
    readableAPI.savePost(post)
  } catch (err) {
    console.log(err)
    dispatch(remove_post(post.id))
    throw err;
  }
}

export const deletePost = post => async dispatch => {
  dispatch(remove_post(post.id));
  try{
    readableAPI.deletePost(post.id)
  } catch (err) {
    console.log(err)
    dispatch(add_post(post))
    throw err
  }
}

export const like = id => async dispatch => {
  dispatch(upVote(id))
  try{
    readableAPI.vote(id, 'upVote')
  } catch(err) {
    console.log(err)
    dispatch(downVote(id))
  }
}

export const dislike = id => async dispatch => {
  dispatch(downVote(id))
  try{
    readableAPI.vote(id, 'downVote')
  } catch(err) {
    console.log(err)
    dispatch(upVote(id))
  }
}
