import React from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Create'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: '15px',
    marginBottom: '4px'
  }
})

function CommentForm ({comment, handleBody, handleAuthor, submit, disableEditMode, classes}) {
  const {body, author} = comment
  return (
    <form onSubmit={submit}>
      <Card className={classes.root}>
        {
          disableEditMode &&
            <CardHeader
              action={(
                <IconButton onClick={disableEditMode}>
                  <ClearIcon />
                </IconButton>
              )}
            />
        }
        <TextField
          label="Comment" variant="outlined" margin="normal"
          rowsMax="4" required fullWidth multiline 
          value={body}
          onChange={handleBody}
        />
        <TextField
          label="Author" variant="outlined" margin="normal"
          required fullWidth
          value={author}  
          onChange={handleAuthor}
        />
        <div style={{textAlign: 'right'}}>
          <Fab color="primary" aria-label="Add"onClick={e => submit(e)}>
            {disableEditMode ? <EditIcon /> : <AddIcon />}
          </Fab>
        </div>
      </Card>
    </form>
  )
}

export default withStyles(styles)(CommentForm)
