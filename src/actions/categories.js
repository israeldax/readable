export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const receive_categories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
})

// export const handleInitialData = () => async dispatch => {
//   try {
//     const categories = await readableAPI.getCategories()
//     dispatch(receive_categories(categories))
//   } catch (err) {
//     console.log(err) //TODO: Tratar erro
//   }
// }