import React from 'react'
import {connect} from 'react-redux'
import {getComments} from '../actions/comments'
import Comment from './Comment'
import CommentAddEdit from './CommentAddEdit'

class CommentsListing extends React.PureComponent {

  componentDidMount() {
    const {getComments, id} = this.props
    getComments(id)
  }

  render() {
    const {loading, comments, id} = this.props

    if(loading)
      return <div>Loading</div>

    return(
      <div>
        {comments.map(c => <Comment key={c.id} comment={c} />)}
        <CommentAddEdit parentId={id} />
      </div>
    )
  }

}

const mapStateToProps = ({isFetchingComments, comments}, {id}) => ({
  id,
  loading: isFetchingComments,
  comments
})

const mapDispatchToProps = (dispatch) => ({
  getComments: id => dispatch(getComments(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsListing)