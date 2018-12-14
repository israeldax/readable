import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core'

const style = theme => ({
  root: {
    minHeight: '100%'
  }
})

function load({classes}) {
  return (
    <Grid container className={classes.root} spacing={0} direction="column" alignItems="center" justify="center">
      <CircularProgress />
    </Grid>
  )
}

export default withStyles(style)(load)
