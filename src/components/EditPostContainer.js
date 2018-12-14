import React from 'react'
import {connect} from 'react-redux'
import PostFormPresentation from './PostFormPresentation'
import {editPost} from '../actions/posts'

class EditPostContainer extends React.Component {

  state = {...this.props.post}

  emptyState = {
    id: "",
    timestamp: "",
    title: "",
    body: "",
    author: "",
    voteScore: 1,
    category: "",
  }

  handleTitle = event => {
    this.setState({ title: event.target.value })
  }

  handleBody = event => {
    this.setState({ body: event.target.value })
  }

  handleAuthor = event => {
    this.setState({ author: event.target.value })
  }

  handleCategory = event => {
    this.setState({ category: event.target.value })
  }

  submit = event => {
    event.preventDefault()
    const {disableEditMode, editPost, post} = this.props
    const {title, body} = this.state
    const editedPost = {...this.state}

    editedPost.title = title.trim()
    editedPost.body = body.trim()

    disableEditMode()
    try {
      editPost(editedPost, post)
    } catch (err) {
      // TODO: Show error message to user
    }
  }

  render() {
    const {disableEditMode} = this.props
    return(
      <PostFormPresentation
        post={this.state} submit={this.submit} disableEditMode={disableEditMode}
        handleTitle={this.handleTitle} handleBody={this.handleBody}
        handleAuthor={this.handleAuthor} handleCategory={this.handleCategory}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editPost: (editedPost, uneditedPost) => dispatch(editPost(editedPost, uneditedPost))
})

export default connect(undefined, mapDispatchToProps)(EditPostContainer)
