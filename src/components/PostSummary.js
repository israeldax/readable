import React from 'react'
import {connect} from 'react-redux'
import LikeDislikePosts from './LikeDislikePosts'
import {Link} from 'react-router-dom'
import {deletePost} from '../actions/posts'

class PostSummary extends React.PureComponent {

  render() {
    const {dispatch, post} = this.props
    const {id, title, author, voteScore=1, commentCount=0} = post
    return (
      <div>
        <Link to={{pathname:`/${post.category}/${id}`, state:{post} }} >
          <h2>{title}</h2>
        </Link>
        <p>
          id: {id}
          autor: {author}
          pontuação: {voteScore}
          comentários: {commentCount}
        </p>
        <LikeDislikePosts id={id} />
        <button onClick={() => dispatch(deletePost(post))}>x</button>
      </div>
    )
  }
}

export default connect((state, {post}) => ({post}))(PostSummary)