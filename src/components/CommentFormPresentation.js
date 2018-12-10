import React from 'react'

function CommentForm ({comment, handleBody, handleAuthor, submit}) {
  const {body, author} = comment
  return (
    <form onSubmit={submit}>
      <textarea value={body} cols="30" rows="10" onChange={handleBody}/>
      <input type="txt" value={author} onChange={handleAuthor}/>
      <button type="submit">Send</button>
    </form>
  )
}

export default CommentForm
