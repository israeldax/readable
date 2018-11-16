import React from 'react'
import {connect} from 'react-redux'
import {like, dislike} from '../actions/posts'


class LikeDislikePosts extends React.PureComponent {
  render() {
    const {dispatch, id} = this.props
    return (
      <div>
        <button onClick={() => dispatch(like(id))}>+</button>
        <button onClick={() => dispatch(dislike(id))}>-</button>
      </div>
    )
  }
}

export default connect((state, {id}) => ({id}))(LikeDislikePosts)