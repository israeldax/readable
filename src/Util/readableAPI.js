const api = '//localhost:3001'

let token = localStorage.token
if(!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(resp => resp.json())
    .then(json => json.categories)

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
   .then(resp => resp.json())

export const getFilteredPosts = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(resp => resp.json())

export const vote = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
  .then(resp => resp.json())

export const savePost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, {method:'DELETE', headers})
  .then(resp => resp.json())