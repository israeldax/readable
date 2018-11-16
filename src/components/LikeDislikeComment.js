import React from 'react'
import {connect} from 'react-redux'
import {likeComment, dislikeComment} from '../actions/comments'


class LikeDislikeComments extends React.PureComponent {
  render() {
    const {dispatch, id} = this.props
    return (
      <div>
        <button onClick={() => dispatch(likeComment(id))}>+</button>
        <button onClick={() => dispatch(dislikeComment(id))}>-</button>
      </div>
    )
  }
}

export default connect((state, {id}) => ({id}))(LikeDislikeComments)