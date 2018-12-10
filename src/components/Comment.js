import React from 'react'
import {connect} from 'react-redux'
import {deleteComment} from '../actions/comments'
import LikeDislike from './LikeDislikeComment'

class Comment extends React.PureComponent {

  render() {
    const {comment, enableEditMode, deleteComment} = this.props
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
        <button onClick={enableEditMode}>e</button>
        <button onClick={() => deleteComment(comment)}>x</button>
      </div>
    )
  }

}

const mapStateToProps = (state, {comment, enableEditMode}) => ({
  comment,
  enableEditMode
})

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Comment)
