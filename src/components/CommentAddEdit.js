import React from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v1'
import {saveComment} from '../actions/comments'

class CommentAddEdit extends React.PureComponent {

  defaultState = {
    id: "",
    timestamp: "",
    body: "",
    author: "",
    voteScore: 1,
    parentId: this.props.parentId,
  }

  state = this.props.comment ? {...this.props.comment} : {...this.defaultState}

  handleBody = e => {
    this.setState({body: e.target.value})
  }

  handleAuthor = e => {
    this.setState({author: e.target.value})
  }

  submit = e => {
    e.preventDefault()
    const {id, timestamp, body, author, voteScore, parentId} = this.state
    const {dispatch} = this.props
    const comment = {}

    comment.id = id ? id : uuid()
    comment.timestamp = timestamp ? timestamp : Date.now()
    comment.parentId = parentId
    comment.body = body.trim()
    comment.author = author.trim()
    comment.voteScore = voteScore || voteScore === 0 ? voteScore : 1

    this.setState({...this.defaultState})
    try {
      dispatch(saveComment(comment))
    } catch (err) {
      //TODO: treat errot
    }
  }

  render() {
    const {body, author} = this.state
    return (
      <div>
        <form onSubmit={this.submit}>
          <textarea value={body} cols="30" rows="10" onChange={this.handleBody}/>
          <input type="txt" value={author} onChange={this.handleAuthor}/>
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, {parentId, comment}) => ({
  parentId, comment
})

export default connect(mapStateToProps)(CommentAddEdit)
