import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'

import {deleteComment} from '../actions/comments'
import LikeDislike from './LikeDislikeComment'

const style = theme => ({
  root: {
    marginBottom: '4px'
  }
})

class Comment extends React.PureComponent {

  state = {anchorEl: null}

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const {comment, enableEditMode, deleteComment, classes} = this.props
    const {id, timestamp, body, author, voteScore} = comment
    const {anchorEl} = this.state
    const commentDate = moment(timestamp)
    return (
      <Card className={classes.root}>
        <CardHeader
          subheader={
            `By ${author} in ${commentDate.format('LLL')}`
          }
          action={(
            <Fragment>
              <IconButton
                aria-owns={anchorEl ? 'comment-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="comment-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={() => enableEditMode()}>Edit</MenuItem>
                <MenuItem onClick={() => deleteComment(comment)}>Delete</MenuItem>
              </Menu>
            </Fragment>
          )}
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{alignItems: "flex-start"}} >
            <LikeDislike id={id} count={voteScore} />
          </div>
        </CardActions>
      </Card>
    )
  }

}

const mapStateToProps = (state, {comment, enableEditMode}) => ({
  comment,
  enableEditMode
})

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment))
})
export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(style)(Comment)
)
