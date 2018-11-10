import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchCategories} from '../actions/categories'

class PostsList extends React.PureComponent {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchCategories())
  }

  render() {
    const {categories} = this.props
    return (
      <div>
        {categories.map(cat =>
          <Link to={`/${cat.path}`} key={cat.path}>{cat.name}</Link>)
        }
      </div>
    )
  }
}

export default connect(state => ({categories: state.categories}))(PostsList)
