import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {sortby} from '../actions/sortingby'
import PostsList from './PostsList'
import CategoriesList from './CategoriesList'
import PostDetails from './PostDetails'

class App extends Component {

  componentDidMount() {
    this.props.populateComponent()
  }

  render() {
    const {loading, sortingby, sortbyVote, sortbyDate} = this.props

    if(loading)
      return <div>"loading..."</div>

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" component={CategoriesList} />
            <input type="radio" value="vote" checked={sortingby === 'vote'} onChange={() => sortbyVote()}/>
              Vote
            <input type="radio" value="date" checked={sortingby === 'date'} onChange={() => sortbyDate()}/>
              Date
            <hr/>
            <Route exact path="/" component={PostsList} />
            <Route exact path="/:category" render={({match}) => <PostsList filter={match.params.category} />} />
            <Route exact path="/:category/:id" component={PostDetails} />
          </header>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({isFetchingInitialData, sortingby}) => ({
  loading: isFetchingInitialData,
  sortingby
})

const mapDispatchToProps = dispatch => ({
  populateComponent: () => dispatch(handleInitialData()),
  sortbyVote: () => dispatch(sortby('vote')),
  sortbyDate: () => dispatch(sortby('date'))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
