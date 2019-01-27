import React from 'react'
import {connect} from 'react-redux'

import Loading from './Loading'

import PageNotFound from './PageNotFound' 
import Placeholder from './Placeholder'
import PostSummary from './PostSummary'
import EditPost from './EditPostContainer'
import CommentsListing from './CommentsListing'


function PostDetails ({post, loading}) {
  if(loading)
    return <Loading />
  if(!post)
    return <PageNotFound />

  return (
    <div>
    <PostDetailPlaceholder post={post} showBody />
      <div>
        <CommentsListing parentId={post.id}/>
      </div>
    </div>
  )
}

const PostDetailPlaceholder = Placeholder(PostSummary, EditPost)

const mapStateToProps = ({posts, allPosts, isFetchingInitialData}, {id}) => {
  let post = allPosts.length > 0 ? posts[id] : undefined
  return {
    post,
    loading: isFetchingInitialData
  }
}

export default connect(mapStateToProps)(PostDetails)
