import { GET_KEYWORD, TOGGLE_FIRST_OR_LAST_UPLOAD, TOGGLE_TAG } from "../actionTypes/actionTypes";

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
            return {
                ...state,
                filters: {
                    ...state.filters,
                    firstDate: !state.filters.firstDate
                }

            };
        case TOGGLE_TAG:
            if (!state.filters.tags.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: [...state.filters.tags, action.payload]
                    }
                }
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    tags: state.filters.tags.filter(tag => tag !== action.payload)
                }
            }
        case GET_KEYWORD:
            return {
                ...state,
                keyword: action.payload
            };

        default:
            return state;
    }
};

export default filterReducer;