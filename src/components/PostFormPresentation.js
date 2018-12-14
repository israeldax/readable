import React from 'react'
import {connect} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Fab from '@material-ui/core/Fab'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Create'
import {withStyles} from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput';

const styles = theme => ({
  root: {
    padding: '15px',
    marginBottom: '4px'
  }
})

function PostFormPresentation (props) {

  const {post, categories, submit, handleTitle, handleBody, handleAuthor, handleCategory, disableEditMode, classes} = props
  const {title, body, author, category} = post

  return (
    <form onSubmit={submit}>
      <Card className={classes.root}>

      {disableEditMode && 
      <CardHeader
        action={(
          <IconButton onClick={disableEditMode}>
            <ClearIcon />
          </IconButton>
        )}
      />
      }

        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Post title" variant="outlined" margin="normal"
              required fullWidth
              value={title}  
              onChange={handleTitle}
            />
            <TextField
              label="Post text" variant="outlined" margin="normal"
              rowsMax="4" required fullWidth multiline 
              value={body}
              onChange={handleBody}
              />
          </Grid>
          <Grid item xs={12}>
            <FormControl style={{width: '70%', paddingRight: '30px'}}>
              <TextField
                label="Author" variant="outlined" margin="normal"
                required fullWidth
                value={author}  
                onChange={handleAuthor}
              />
            </FormControl>
            <FormControl style={{width: '30%', paddingTop: '16px'}}>
              <Select
                value={category} required fullWidth
                onChange={handleCategory}
                input={<OutlinedInput labelWidth={0} name="category" />}
              >
                <MenuItem disabled value="">
                  <em>None</em>
                </MenuItem>
                {categories.map(cat => (
                  <MenuItem key={cat.path} value={cat.path}>{cat.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'right'}}>
            <Fab color="primary" aria-label="Add"onClick={e => submit(e)}>
              {disableEditMode ? <EditIcon /> : <AddIcon />}
            </Fab>
          </Grid>
        </Grid>
      </Card>
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
    handleCategor: ownProps.handleCategory,
    classes: ownProps.classes
  }
}

export default connect(mapStateToProps)(
  withStyles(styles)(PostFormPresentation)
)
