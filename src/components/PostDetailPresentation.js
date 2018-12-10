import React from 'react'
import {connect} from 'react-redux'
import LikeDislikePosts from './LikeDislikePosts'
import {deletePost} from '../actions/posts'

const PostDetailPresentation = (props) => {
  const {post, enableEditMode, dispatch} = props
  const {id, title, body, author, voteScore=1, commentCount=0} = post
  return (
    <div>
      <h2>{title}</h2>
      <p>
        id: {id}
        autor: {author}
        pontuação: {voteScore}
        body: {body}
        comentários: {commentCount}
      </p>
      <LikeDislikePosts id={id} />
      <button onClick={() => dispatch(deletePost(post))}>x</button>
      <button onClick={() => enableEditMode()}>e</button>
    </div>
  )
}



export default connect()(PostDetailPresentation)
