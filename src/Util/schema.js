import {schema} from 'normalizr'

export const category = new schema.Entity('category', {}, {idAttribute: 'path'})
export const arrayOfCategories = new schema.Array(category)

export const post = new schema.Entity('post')
export const arrayOfPosts = new schema.Array(post)

export const comment = new schema.Entity('comment')
export const arrayOfComments = new schema.Array(comment)
