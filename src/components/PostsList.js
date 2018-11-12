import React from 'react'
import PostSummary from './PostSummary'
import NewPostForm from './NewPostForm'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/posts'

class PostsList extends React.PureComponent {

  componentDidMount() {
    const {dispatch, posts} = this.props
    if(posts.length === 0){
      try {
        dispatch(fetchPosts())
      } catch(err) {
        console.log(err); //TODO: treat error
      }
    }
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
        <NewPostForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loadingPosts
})

export default connect(mapStateToProps)(PostsList);
