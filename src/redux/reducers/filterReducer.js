import { GET_KEYWORD, TOGGLE_FIRST_OR_LAST_UPLOAD,  TOGGLE_TAG } from "../actionTypes/actionTypes";

const initialState = {
    filters: {
        tags: [],
        firstDate: true
    },
    keyword: "",
    
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FIRST_OR_LAST_UPLOAD:
            return {};
        case TOGGLE_TAG:
            return {};
        case GET_KEYWORD:
            return {};
        
        default:
            return state;
    }
};

export default filterReducer;