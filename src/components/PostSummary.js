import React from 'react'

function PostSummary ({post}) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        autor: {post.autor}
        pontuação: {post.voteScore}
        comentários: {post.commentCount}
      </p>
    </div>
  )
}

export default PostSummary