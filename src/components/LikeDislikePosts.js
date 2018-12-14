import React from 'react'
import {connect} from 'react-redux'

import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import { withStyles } from '@material-ui/core/styles';

import {like, dislike} from '../actions/posts'

const style = theme => ({
  likeArea: {
    margin: '5px'
  }
})

class LikeDislikePosts extends React.PureComponent {
  render() {
    const {dispatch, id, count, classes} = this.props
    return (
      <div className={classes.likeArea}>
        <IconButton aria-label="like" onClick={() => dispatch(like(id))}>
          <ThumbUp />
        </IconButton>
        <span className={classes.counting}>
          {count}
        </span>
        <IconButton aria-label="Dislike" onClick={() => dispatch(dislike(id))}>
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
  withStyles(style)(LikeDislikePosts)
)
