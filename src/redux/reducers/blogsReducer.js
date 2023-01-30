import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
    loading: false,
    blogs: [],
    error: false
}

const blogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {};
        case ADD_CONTENT:
            return {};
        case UPDATE_CONTENT:
            return {};
        case DELETE_CONTENT:
            return {};
        default:
            return state;
    }
}

export default blogsReducer;