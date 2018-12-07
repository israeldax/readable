import {normalize} from 'normalizr'
import * as schema from '../Util/schema'
import * as readableAPI from '../Util/readableAPI'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receive_categories = (categories) => {
  const resp = normalize(categories, schema.arrayOfCategories)
  return {
    type: RECEIVE_CATEGORIES,
    categories: resp.entities.category,
    allCategories: resp.result
  }
}

export const fetchCategories = () => async dispatch => {
  try {
    const categories = await readableAPI.getCategories()
    dispatch(receive_categories(categories))
  } catch (err) {
    console.log(err) //TODO: Tratar erro
  }
}
