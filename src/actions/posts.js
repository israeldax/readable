import * as readableAPI from '../Util/readableAPI'

export const FETCH_POSTS = 'FETCH_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

const fetch_posts = () => ({ type: FETCH_POSTS})

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

const up_vote = id => ({
  type: UPVOTE,
  id
})

const down_vote = id => ({
  type: DOWNVOTE,
  id
})

export const initPosts = () => async dispatch => {
  dispatch(fetch_posts())
  try {
    const posts = await readableAPI.getPosts()
    dispatch(receive_posts(posts))
  } catch (err) {
    console.log(err)
    dispatch(initPosts())
  }
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
  dispatch(up_vote(id))
  try{
    readableAPI.vote(id, 'upVote')
  } catch(err) {
    console.log(err)
    dispatch(down_vote(id))
  }
}

export const dislike = id => async dispatch => {
  dispatch(down_vote(id))
  try{
    readableAPI.vote(id, 'downVote')
  } catch(err) {
    console.log(err)
    dispatch(up_vote(id))
  }
}
