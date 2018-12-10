import React from 'react'
import {connect} from 'react-redux'

function PostFormPresentation ({post, categories, submit, handleTitle, handleBody, handleAuthor, handleCategory}) {
  const {title, body, author, category} = post
  return (
    <form onSubmit={submit}>
      <input type="text" value={title} placeholder="Title of your post..." required onChange={handleTitle} />
      <textarea value={body} placeholder="Your post..." required onChange={handleBody} />
      <input type="text" value={author} placeholder="Your display name" required onChange={handleAuthor} />
      <select value={category} required onChange={handleCategory}>
        <option value="" disabled hidden>Choose one</option>
        {categories.map(cat => <option key={cat.path} value={cat.name}>{cat.name}</option>)}
      </select>
      <input type="submit" />
    </form>
  )
}

const mapStateToProps = ({allCategories, categories}, ownProps) => {
  const categoryList = allCategories.map(id => categories[id])
  return {
    categories: categoryList,
    post: ownProps.post,
    submit: ownProps.submit,
    handleTitle: ownProps.handleTitle,
    handleBody: ownProps.handleBody,
    handleAuthor: ownProps.handleAuthor,
    handleCategor: ownProps.handleCategory
  }
}

export default connect(mapStateToProps)(PostFormPresentation)
