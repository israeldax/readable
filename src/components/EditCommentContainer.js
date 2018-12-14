import React from 'react'
import {connect} from 'react-redux'
import CommentFormPresentation from './CommentFormPresentation'
import {editComment} from '../actions/comments'

class EditCommentContainer extends React.PureComponent {

  state = {...this.props.comment}

  handleBody = e => {
    this.setState({body: e.target.value})
  }

  handleAuthor = e => {
    this.setState({author: e.target.value})
  }

  submit = e => {
    e.preventDefault()
    const {disableEditMode, editComment, comment} = this.props
    const editedComment = {...this.state}

    editedComment.timestamp = Date.now()
    editedComment.body = this.state.body.trim()

    disableEditMode()
    try {
      editComment(editedComment, comment)
    } catch (err) {
      // TODO: Show error message to user
    }
  }

  render() {
    const {disableEditMode} = this.props
    return (
      <div>
        <CommentFormPresentation
          comment={this.state} submit={this.submit} disableEditMode={disableEditMode}
          handleBody={this.handleBody} handleAuthor={this.handleAuthor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, {comment, disableEditMode}) => ({
  comment,
  disableEditMode
})

const mapDispatchToProps = dispatch => ({
  editComment: (editedComment, uneditedComment) => dispatch(editComment(editedComment, uneditedComment))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
