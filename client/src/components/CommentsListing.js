import React from 'react'
import {connect} from 'react-redux'

import Loading from './Loading'
import Message from './Message'
import {getComments} from '../actions/comments'
import Placeholder from './Placeholder'
import Comment from './Comment'
import EditComment from './EditCommentContainer'
import AddComment from './AddCommentContainer'

class CommentsListing extends React.PureComponent {

  componentDidMount() {
    const {getComments, parentId} = this.props
    getComments(parentId)
  }

  render() {
    const {loading, comments, parentId} = this.props

    if(loading)
      return <Loading />

    if(comments.lenght === 0)
      return <Message msg="No comments yet." />

    return(
      <div>
        {comments.map(c => <CommentPlaceholder key={c.id} comment={c} />)}
        <AddComment parentId={parentId} />
      </div>
    )
  }

}

const CommentPlaceholder = Placeholder(Comment, EditComment)

const mapStateToProps = ({isFetchingComments, comments, allComments}, {parentId}) => {
  const commentsList = allComments.map(id => comments[id])
  return {
    parentId,
    loading: isFetchingComments,
    comments: commentsList
  }
}

const mapDispatchToProps = (dispatch) => ({
  getComments: id => dispatch(getComments(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListing)
