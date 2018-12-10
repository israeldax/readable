import React from 'react'
import {connect} from 'react-redux'
import PageNotFound from './PageNotFound' 
import Placeholder from './Placeholder'
import PostDetailPresentation from './PostDetailPresentation'
import EditPost from './EditPostContainer'
import CommentsListing from './CommentsListing'


function PostDetails ({post, loading}) {
  if(loading)
    return <div>Loading...</div>
  if(!post)
    return <PageNotFound />

  return (
    <div>
    <PostDetailPlaceholder post={post} />
      <div>
        <CommentsListing parentId={post.id}/>
      </div>
    </div>
  )
}

const PostDetailPlaceholder = Placeholder(PostDetailPresentation, EditPost)

const mapStateToProps = ({posts, allPosts, isFetchingInitialData}, {id}) => {
  let post = allPosts.length > 0 ? posts[id] : undefined
  return {
    post,
    loading: isFetchingInitialData
  }
}

export default connect(mapStateToProps)(PostDetails)
