import {RECEIVE_DATA} from '../actions/shared'
import {ADD_POST, REMOVE_POST} from '../actions/posts'

const allPosts = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.allPosts
        case ADD_POST:
            return state.concat([action.post.id])
        case REMOVE_POST:
            return state.filter(id => id !== action.id)
        default:
            return state;
    }
}

export default allPosts
