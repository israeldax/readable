import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v1'
import CommentFormPresentation from './CommentFormPresentation'
import {saveComment} from '../actions/comments'

class AddCommentContainer extends React.PureComponent {

  defaultState = {
    id: "",
    timestamp: "",
    body: "",
    author: "",
    voteScore: 1,
    parentId: this.props.parentId,
  }

  state = {...this.defaultState}

  handleBody = e => {
    this.setState({body: e.target.value})
  }

  handleAuthor = e => {
    this.setState({author: e.target.value})
  }

  submit = e => {
    e.preventDefault()
    const {dispatch} = this.props
    const {body, author} = this.state
    const comment = { ...this.state }

    comment.id = uuid()
    comment.timestamp = Date.now()
    comment.body = body.trim()
    comment.author = author.trim()

    this.lastState = comment
    this.setState({...this.defaultState})
    try {
      dispatch(saveComment(comment))
    } catch (err) {
      this.setState(this.lastState)
    }
  }

  render() {
    return (
      <div>
        <CommentFormPresentation
          comment={this.state} submit={this.submit}
          handleBody={this.handleBody} handleAuthor={this.handleAuthor}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, {parentId}) => ({
  parentId
})

export default connect(mapStateToProps)(AddCommentContainer)
