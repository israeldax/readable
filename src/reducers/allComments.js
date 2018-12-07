import {RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT} from '../actions/comments'

const allPosts = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return state.concat(action.allComments)
        case ADD_COMMENT:
            return state.concat([action.comment.id])
        case DELETE_COMMENT:
            return state.filter(id => id !== action.id)
        default:
            return state;
    }
}

export default allPosts
