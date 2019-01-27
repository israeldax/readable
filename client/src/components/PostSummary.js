import React, {PureComponent, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChatIcon from '@material-ui/icons/Chat'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'

import LikeDislikePosts from './LikeDislikePosts'
import {deletePost} from '../actions/posts'

const styles = theme => ({
  post: {
    marginBottom: '4px'
  },
  title: {
    textDecoration: 'none'
  }
})

class PostSummary extends PureComponent {

  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const {dispatch, enableEditMode, post, classes, showBody} = this.props
    const {id, title, body, author, timestamp, voteScore=1, commentCount=0} = post
    const {anchorEl} = this.state
    const postDate = moment(Number(timestamp))

    return (
      <Card className={classes.post}>
        <Fragment>
          <CardHeader
            title={(
              <Link to={`/${post.category}/${id}`} className={classes.title}>
                <Typography variant="display1" gutterBottom>{title}</Typography>
              </Link>
            )}
            subheader={
              `By ${author} in ${postDate.format('LLL')}`
            }
            action={(
              <Fragment>
                <IconButton
                  aria-owns={anchorEl ? 'post-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="post-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={() => enableEditMode()}>Edit</MenuItem>
                  <MenuItem onClick={() => dispatch(deletePost(post))}>Delete</MenuItem>
                </Menu>
              </Fragment>
            )}
          />
          {showBody &&
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {body}
              </Typography>
            </CardContent>
          }
          <CardActions>
            <Grid container justify="space-between" >
              <div style={{alignItems: "flex-start"}} >
                <LikeDislikePosts id={id} count={voteScore} />
              </div>
              <div style={{alignItems: "flex-end"}} >
                <IconButton disabled><ChatIcon /></IconButton>{commentCount}
              </div>
            </Grid>
          </CardActions>
        </Fragment>
      </Card>
    )
  }
}

export default connect()(
  withStyles(styles)(PostSummary)
)
