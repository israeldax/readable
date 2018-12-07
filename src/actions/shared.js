import {normalize} from 'normalizr'
import * as schema from '../Util/schema'
import * as readableAPI from '../Util/readableAPI'

export const FETCH_DATA = 'FETCH_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const fetch_data = () => ({ type: FETCH_DATA })

export const receive_data = (categories, posts) => {
  const ncat = normalize(categories, schema.arrayOfCategories)
  const npost = normalize(posts, schema.arrayOfPosts)
  return {
    type: RECEIVE_DATA,
    allCategories: ncat.result,
    categories: ncat.entities.category,
    allPosts: npost.result,
    posts: npost.entities.post
  }
}

export const handleInitialData = () => dispatch => {
  dispatch(fetch_data())

  return Promise.all([
    readableAPI.getCategories(),
    readableAPI.getPosts()
  ]).then(([categories, posts]) => {
    dispatch(receive_data(categories, posts));
  }).catch((err) => {
    console.log(err)
    handleInitialData()
  })
}
