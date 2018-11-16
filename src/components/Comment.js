import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/comments'
import LikeDislike from './LikeDislikeComment'

class Comment extends React.PureComponent {

  render() {
    const {comment, deleteComment} = this.props
    const {id, timestamp, body, author, voteScore} = comment
    return (
      <div>
        <p>{body}</p>
        <div>
          Autor: {author}
          Pontuação atual: {voteScore}
          timestamp: {timestamp}
        </div>
        <LikeDislike id={id} />
        <button onClick={() => deleteComment(comment)}>x</button>
      </div>
    )
  }

}

const mapStateToProps = (state, {comment}) => ({
  comment
})

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
