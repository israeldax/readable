import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class PostsList extends React.PureComponent {

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

const mapStateToProps = ({allCategories, categories}) => {
  const categoriesList = allCategories.map(id => categories[id])
  return {
    categories: categoriesList
  }
}

export default connect(mapStateToProps)(PostsList)
