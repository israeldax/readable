import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v1'
import PostFormPresentation from './PostFormPresentation'
import {savePost} from '../actions/posts'

class AddPostContainer extends React.Component {

  defaultState = {
    id: "",
    timestamp: "",
    title: "",
    body: "",
    author: "",
    voteScore: 1,
    commentCount: 0,
    category: "",
  }

  state = {...this.defaultState}

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
    const {addPost} = this.props
    const {title, body, author} = this.state
    const post = {...this.state}

    post.id = uuid()
    post.timestamp = Date.now()
    post.title = title.trim()
    post.body = body.trim()
    post.author = author.trim()

    this.lastState = post
    this.setState({...this.defaultState})
    try {
      addPost(post)
    } catch (err) {
      this.setState(this.lastState)
    }
  }

  render() {
    return(
      <div>
        <PostFormPresentation
          post={this.state} submit={this.submit}
          handleTitle={this.handleTitle} handleBody={this.handleBody}
          handleAuthor={this.handleAuthor} handleCategory={this.handleCategory}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(savePost(post))
})

export default connect(undefined, mapDispatchToProps)(AddPostContainer)
