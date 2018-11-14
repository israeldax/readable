import React from 'react'
import{connect} from 'react-redux'
import {deletePost, like, dislike} from '../actions/posts'

function PostSummary ({dispatch, post}) {
  const {id, title, author, voteScore=1, deleted=false, commentCount=0} = post
  return (
    <div>
      <h2>{title}</h2>
      <p>
        id: {id}
        autor: {author}
        pontuação: {voteScore}
        comentários: {commentCount}
        deleted: {deleted.toString()}
      </p>
      <button onClick={() => dispatch(like(id))}>+</button>
      <button onClick={() => dispatch(dislike(id))}>-</button>
      <button onClick={() => dispatch(deletePost(post))}>x</button>
    </div>
  )
}

export default connect()(PostSummary)