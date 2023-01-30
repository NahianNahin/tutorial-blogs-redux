import { ADD_CONTENT, DELETE_CONTENT, FETCHING_ERROR, FETCHING_START, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const get_content = (blogs) => {
    return {
        type: GET_CONTENT,
        payload : blogs
    }
}
export const add_content = (blog) => {
    return {
        type: ADD_CONTENT,
        payload : blog
    }
}
export const update_content = (blog) => {
    return {
        type: UPDATE_CONTENT,
        payload : blog
    }
}
export const delete_content = (id) => {
    return {
        type: DELETE_CONTENT,
        payload : id
    }
}

// FETCHING START & ERROR
export const fetching_start = () => {
    return {
        type: FETCHING_START,
    }
}
export const fetching_error = () => {
    return {
        type: FETCHING_ERROR,
    }
}
