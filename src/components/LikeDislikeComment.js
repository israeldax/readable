import React from 'react'
import {connect} from 'react-redux'

import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';

import {likeComment, dislikeComment} from '../actions/comments'

const style = theme => ({
  likeArea: {
    margin: '5px'
  }
})

class LikeDislikeComments extends React.PureComponent {
  render() {
    const {dispatch, id, count, classes} = this.props
    return (
      <div className={classes.likeArea}>
        <IconButton aria-label="like" onClick={() => dispatch(likeComment(id))}>
          <ThumbUp />
        </IconButton>
        <span className={classes.counting}>
          {count}
        </span>
        <IconButton aria-label="Dislike" onClick={() => dispatch(dislikeComment(id))}>
          <ThumbDown />
        </IconButton>
      </div>
    )
  }
}

const mapStateToProps = (state, {id, count, classes}) => ({
  id,
  count,
  classes
}) 

export default connect(mapStateToProps)(
  withStyles(style)(LikeDislikeComments)
)
