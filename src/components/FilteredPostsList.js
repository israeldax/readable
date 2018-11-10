import React from 'react'
import PostSummary from './PostSummary'
import {connect} from 'react-redux'
import {fetchFilteredPosts, reset_filtered_posts_loading} from '../actions/filteredPosts'

class FilteredPostsList extends React.PureComponent {

  componentDidMount() {
    const {dispatch, filter} = this.props
    dispatch(fetchFilteredPosts(filter))
  }

  componentWillUnmount() {
    const {dispatch} = this.props
    dispatch(reset_filtered_posts_loading())
  }

  render() {
    const {loading, filteredPosts} = this.props

    if(loading)
      return <div>Carregando</div>

    if(filteredPosts.length === 0)
      return <div>Ainda não há postagens</div>


    return (
      <div>
        {filteredPosts.map(post => <PostSummary key={post.id} post={post} />)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  filter: ownProps.filter,
  loading: state.loadingFilteredPosts,
  filteredPosts: state.filteredPosts,
})

export default connect(mapStateToProps)(FilteredPostsList);
