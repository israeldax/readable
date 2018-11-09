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