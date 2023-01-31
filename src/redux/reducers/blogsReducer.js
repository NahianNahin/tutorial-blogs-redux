import { ADD_CONTENT, ADD_TO_HISTORY, DELETE_CONTENT, FETCHING_ERROR, FETCHING_START, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
    loading: false,
    blogs: [],
    error: false,
    history: []
}

const blogsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                loading: false,
                blogs: action.payload
            };
        case ADD_CONTENT:
            return {
                ...state,
                blogs: [...state.blogs, action.payload]
            };
        case UPDATE_CONTENT:
            return {};
        case DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter(blog => blog._id !== action.payload)
            };
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            };
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
}

export default blogsReducer;