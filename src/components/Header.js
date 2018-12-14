import React from 'react'

import Grid from '@material-ui/core/Grid';

import CategoriesList from './CategoriesList'
import SortingControl from './SortingControl'


const Header = () => {
  return(
    <header>
      <Grid container spacing={24}>
        <Grid item xs={9}>
          <CategoriesList />
        </Grid>
        <Grid item xs={3}>
          <SortingControl />
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
