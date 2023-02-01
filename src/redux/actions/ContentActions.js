import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, FETCHING_ERROR, FETCHING_START, GET_CONTENT, SELECTED_BLOG, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const get_content = (blogs) => {
    return {
        type: GET_CONTENT,
        payload: blogs
    }
}
export const add_content = (blog) => {
    return {
        type: ADD_CONTENT,
        payload: blog
    }
}
export const update_content = (_id, blog) => {
    return {
        type: UPDATE_CONTENT,
        payload: {
            _id: _id,
            ...blog
        }
    }
}
export const delete_content = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
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

// ADD TO READING HISTORY

export const add_to_history = (blog) => {
    return {
        type: ADD_TO_HISTORY,
        payload: blog
    }
}


export const selected_blog = (blog) => {
    return {
        type: SELECTED_BLOG,
        payload: blog
    }
}