import React from 'react'
import PostSummary from './PostSummary'
import {connect} from 'react-redux'
import {initFilteredPosts} from '../actions/filteredPosts'

class FilteredPostsList extends React.PureComponent {

  componentDidMount() {
    const {populateComponent, filter} = this.props
    populateComponent(filter)
  }

  componentDidUpdate(prevState) {
    const {populateComponent, filter} = this.props
    if(prevState.filter !== filter)
      populateComponent(filter)
  }

  render() {
    const {loading, posts} = this.props

    if(loading)
      return <div>Carregando</div>

    if(posts.length === 0)
      return <div>Ainda não há postagens</div>

    return (
      <div>
        {posts.map(post => <PostSummary key={post.id} post={post} />)}
      </div>
    )
  }
}

const mapStateToProps = ({filteredPosts, isFetchingFilteredPosts}, {filter}) => ({
  filter,
  loading: isFetchingFilteredPosts,
  posts: filteredPosts,
})

const mapDispatchToProps = dispatch => ({
  populateComponent: filter => dispatch(initFilteredPosts(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredPostsList);
