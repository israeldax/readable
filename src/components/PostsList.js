import React from 'react'
import PostSummary from './PostSummary'
import NewPostForm from './NewPostForm'
import {connect} from 'react-redux'
import {initPosts} from '../actions/posts'

class PostsList extends React.PureComponent {

  componentDidMount() {
    const {dispatch, posts} = this.props
    if(posts.length === 0){
      try {
        dispatch(initPosts())
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

const sortList = (posts, sortingby) => {
  const attr = sortingby === 'vote' ? 'voteScore' : 'timestamp'
  return posts.slice(0).sort((a,b) => b[attr] - a[attr])
}

const mapStateToProps = ({posts, isFetchingPosts, sortingby}) => ({
  posts: sortList(posts, sortingby),
  loading: isFetchingPosts
})

export default connect(mapStateToProps)(PostsList);
