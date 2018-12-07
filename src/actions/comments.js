import {normalize} from 'normalizr'
import * as schema from '../Util/schema'
import * as readableAPI from '../Util/readableAPI'

export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const UP_VOTE_COMMENT = 'UP_VOTE'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

const fetch_comments = () => ({
  type: FETCH_COMMENTS
})

const receive_comments = (comments) => {
  const resp = normalize(comments, schema.arrayOfComments)
  return {
    type: RECEIVE_COMMENTS,
    comments: resp.entities.comment,
    allComments: resp.result
  }
}

const upvote_comment = id => ({
  type: UP_VOTE_COMMENT,
  id
})

const downvote_comment = id => ({
  type: DOWN_VOTE_COMMENT,
  id
})

const add_comment = comment => ({
  type: ADD_COMMENT,
  comment
})

const delete_comment = id => ({
  type: DELETE_COMMENT,
  id
})

export const getComments =  (id) => async dispatch => {
  dispatch(fetch_comments())
  try {
    const comments = await readableAPI.getComments(id)
    dispatch(receive_comments(comments))
  } catch (err) {
    console.log(err)
    dispatch(getComments())
  }
}

export const likeComment = id => async dispatch => {
  dispatch(upvote_comment(id))
  try{
    readableAPI.voteComment(id, 'upVote')
  } catch(err) {
    console.log(err)
    dispatch(downvote_comment(id))
  }
}

export const dislikeComment = id => async dispatch => {
  dispatch(downvote_comment(id))
  try{
    readableAPI.voteComment(id, 'downVote')
  } catch(err) {
    console.log(err)
    dispatch(upvote_comment(id))
  }
}

export const saveComment = comment => async dispatch => {
  dispatch(add_comment(comment))
  try {
    readableAPI.saveComment(comment)
  } catch (err) {
    console.log(err)
    dispatch(delete_comment(comment.id))
    throw err
  }
}

export const deleteComment = comment => async dispatch => {
  dispatch(delete_comment(comment.id))
  try {
    readableAPI.deleteComment(comment.id)
  } catch (err) {
    console.log(err)
    dispatch(add_comment(comment))
    throw err
  }
}
