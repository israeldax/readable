import React from 'react'
import {connect} from 'react-redux'
import CommentsListing from './CommentsListing'
import LikeDislikePosts from './LikeDislikePosts'
import {deletePost} from '../actions/posts'

function PostDetails ({dispatch, post}) {
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
      <div>
        <CommentsListing id={id}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state, {location}) => ({
  post: location.state.post
})

export default connect(mapStateToProps)(PostDetails)
