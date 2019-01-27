import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core';

import Loading from './Loading'
import Header from './Header'
import {handleInitialData} from '../actions/shared'
import PostsList from './PostsList'
import PostDetails from './PostDetails'
import PageNotFound from './PageNotFound'

const styles = theme => ({
  frame: {
    maxWidth: '1100px',
    padding: '30px',
    margin: 'auto'
  }
}) 

class App extends Component {

  componentDidMount() {
    this.props.populateComponent()
  }

  render() {
    const {loading, classes} = this.props

    if(loading)
      return <Loading />

    return (
      <Router>
        <Fragment>
        <CssBaseline />
          <div className={classes.frame}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Header />
                <hr/>
                <Switch>
                  <Route exact path="/" component={PostsList} />
                  <Route exact path="/:category" render={({match}) => <PostsList filter={match.params.category} />} />
                  <Route exact path="/:category/:id" render={({match}) => <PostDetails id={match.params.id} /> } />
                  <Route component={PageNotFound} />
                </Switch>
              </Grid>
            </Grid>
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({isFetchingInitialData}) => ({
  loading: isFetchingInitialData,
})

const mapDispatchToProps = dispatch => ({
  populateComponent: () => dispatch(handleInitialData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(App)
);
