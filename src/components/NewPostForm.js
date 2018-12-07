import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v1'
import {savePost} from '../actions/posts'

class NewPostForm extends React.Component {

  defaultState = {
    id: "",
    timestamp: "",
    title: "",
    body: "",
    author: "",
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

  submit = async event => {
    event.preventDefault()
    const {title, body, author, category} = this.state
    const {dispatch} = this.props

    const post = {}
    post.id = uuid()
    post.timestamp = Date.now()
    post.title = title.trim()
    post.body = body.trim()
    post.author = author.trim()
    post.category = category
    post.voteScore = 1

    this.setState({...this.defaultState})
    try {
      dispatch(savePost(post))
    } catch (err) {
      //TODO: treat error
    }
  }

  render() {
    const {title, body, author, category} = this.state
    const {categories} = this.props
    return(
      <div>
        <form onSubmit={this.submit}>
          <input type="text" value={title} placeholder="Title of your post..." required onChange={this.handleTitle} />
          <textarea value={body} placeholder="Your post..." required onChange={this.handleBody} />
          <input type="text" value={author} placeholder="Your display name" required onChange={this.handleAuthor} />
          <select value={category} required onChange={this.handleCategory}>
            <option value="" disabled hidden>Choose one</option>
            {categories.map(cat => <option key={cat.path} value={cat.name}>{cat.name}</option>)}
          </select>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (({allCategories, categories}) => {
  const categoryList = allCategories.map(id => categories[id])
  return {
    categories: categoryList
  }
})

export default connect(mapStateToProps)(NewPostForm)