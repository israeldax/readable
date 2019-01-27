import React from 'react'
import {connect} from 'react-redux'

import Loading from './Loading'
import Message from './Message'
import Placeholder from './Placeholder'
import PostSummary from './PostSummary'
import EditPost from './EditPostContainer'
import AddPostContainer from './AddPostContainer'

class PostsList extends React.PureComponent {

  render() {
    const {loading, posts} = this.props

    if(loading)
      return <Loading />

    if(posts.length === 0)
      return <Message msg="Sorry... There are no posts yet." />

    return (
      <div>
        {posts.map(post => <PostPlaceholder key={post.id} post={post} />)}
          <AddPostContainer />
      </div>
    )
  }
}


const PostPlaceholder = Placeholder(PostSummary, EditPost)

const sortList = (posts, sortingby) => {
  const attr = sortingby === 'vote' ? 'voteScore' : 'timestamp'
  return posts.sort((a,b) => b[attr] - a[attr])
}

const mapStateToProps = ({posts, allPosts, isFetchingPosts, sortingby}, {filter}) => {
  const disorderedPosts = allPosts.map(id => posts[id])
  let filteredPosts

  if(filter)
    filteredPosts = disorderedPosts.filter(post => post.category === filter)

  return {
    filter,
    posts: sortList(filter ? filteredPosts : disorderedPosts, sortingby),
    loading: isFetchingPosts
  }
}

export default connect(mapStateToProps)(PostsList);
