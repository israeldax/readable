import React from 'react'
import {connect} from 'react-redux'
import LikeDislikePosts from './LikeDislikePosts'
import {Link} from 'react-router-dom'
import {deletePost} from '../actions/posts'

class PostSummary extends React.PureComponent {

  render() {
    const {dispatch, enableEditMode, post} = this.props
    const {id, title, author, voteScore=1, commentCount=0} = post
    return (
      <div>
        <Link to={`/${post.category}/${id}`} >
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
        <button onClick={() => enableEditMode()}>e</button>
      </div>
    )
  }
}

export default connect((state, {post, enableEditMode}) => ({post}))(PostSummary)