import * as readableAPI from '../Util/readableAPI'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export const receive_data = (categories, posts) => ({
  type: RECEIVE_DATA,
  categories,
  posts
})

export const handleInitialData = () => dispatch =>
  Promise.all([
    readableAPI.getCategories(),
    readableAPI.getPosts()
  ]).then(([categories, posts]) => {
    dispatch(receive_data(categories, posts));
  })