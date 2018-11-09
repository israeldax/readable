import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import {Button} from '@material-ui/core'
import 'typeface-roboto';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    const {categories, posts} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {categories.map(cat => <Button color="primary" key={cat.path}>{cat.name}</Button>)}
          </ul>
          <ul>
            {posts.map(post => <li>{post.title}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  categories: state.categories,
  posts: state.posts
}))(App);
