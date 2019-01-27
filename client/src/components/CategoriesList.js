import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: '100%'
  },
  button: {
    margin: 'auto'
  },
  input: {
    display: 'none'
  }
})

class PostsList extends React.PureComponent {

  render() {
    const {categories, classes} = this.props
    
    return (
      <Grid container className={classes.root} alignItems="center" justify="space-around">
        {categories.map((cat, i) =>
          <Grid item style={{flexGrow: 1}} key={i}>
            <Button
              variant="contained"
              component={Link} to={`/${cat.path}`} key={cat.path}>
                {cat.name}
            </Button>
          </Grid>
        )}
      </Grid>
    )
  }
}

const mapStateToProps = ({allCategories, categories, classes}) => {
  const categoriesList = allCategories.map(id => categories[id])
  const firstCategory = {path:"", name:"All"}
  return {
    categories: [firstCategory, ...categoriesList],
    classes
  }
}

export default connect(mapStateToProps)(
  withStyles(styles)(PostsList)
)
