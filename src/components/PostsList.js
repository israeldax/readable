import React from 'react'
import PostSummary from './PostSummary'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/posts'

class PostsList extends React.PureComponent {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchPosts())
  }

  render() {
    const {loading, posts} = this.props

    if(loading)
      return <div>carregando...</div>

    if(posts.length === 0)
      return <div>Ainda não há postagens</div>

    return (
      <div>
        {posts.map(post => <PostSummary key={post.id} post={post} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loadingPosts
})

export default connect(mapStateToProps)(PostsList);
