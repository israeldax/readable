import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import FilteredPostsList from './FilteredPostsList'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" render={() => <CategoriesList />} />
            <Route exact path="/" render={() => <PostsList />} />
            <Route exact path={"/:category"} render={({match}) => <FilteredPostsList filter={match.params.category} />} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
