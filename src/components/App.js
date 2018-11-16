import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {sortby} from '../actions/sortingby'
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import FilteredPostsList from './FilteredPostsList'
import PostDetails from './PostDetails'

class App extends Component {
  render() {
    const {sortingby, dispatch} = this.props
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" component={CategoriesList} />
            <input type="radio" value="vote" checked={sortingby === 'vote'} onChange={() => dispatch(sortby('vote'))}/>
              Vote
            <input type="radio" value="date" checked={sortingby === 'date'} onChange={() => dispatch(sortby('date'))}/>
              Date
            <hr/>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/:category" render={({match}) => <FilteredPostsList filter={match.params.category} />} />
            <Route exact path="/:category/:id" component={PostDetails} />
          </header>
        </div>
      </Router>
    );
  }
}

export default connect(({sortingby})=>({sortingby}))(App);
