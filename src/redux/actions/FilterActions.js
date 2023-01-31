import { GET_KEYWORD, TOGGLE_FIRST_OR_LAST_UPLOAD, TOGGLE_TAG } from "../actionTypes/actionTypes"

export const toggle_tag = (tag) => {
    return {
        type: TOGGLE_TAG,
        payload: tag
    }
}
export const toggle_first_or_last_upload = () => {
    return {
        type: TOGGLE_FIRST_OR_LAST_UPLOAD,
    }
}
export const get_keyword = (keyword) => {
    return {
        type: GET_KEYWORD,
        payload: keyword
    }
}

