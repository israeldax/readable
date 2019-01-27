import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core'

const style = theme => ({
  root: {
    minHeight: '100%'
  }
})

function PageNotFound ({classes}) {
  return (
    <Grid container className={classes.root} spacing={0} direction="column" alignItems="center" justify="center">
      <Typography component="h2" variant="display3" gutterBottom>
        Sorry, Page not found.
      </Typography>
    </Grid>
  )
}

export default withStyles(style)(PageNotFound)
