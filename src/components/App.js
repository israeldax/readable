import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import FilteredPostsList from './FilteredPostsList'

class App extends Component {

  state = { sortby: 'vote' }

  render() {
    const {sortby} = this.state
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" render={() => <CategoriesList />} />
            <input type="radio" value="vote" checked={sortby === 'vote'} onChange={e => this.setState({sortby: 'vote'})}/>
              Vote
            <input type="radio" value="date" checked={sortby === 'date'} onChange={e => this.setState({sortby: 'date'})}/>
              Date
            <hr/>
            <Route exact path="/" render={() => <PostsList sortby={sortby} />} />
            <Route exact path={"/:category"} render={({match}) => <FilteredPostsList filter={match.params.category} sortby={sortby} />} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
