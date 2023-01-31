import { delete_content } from "../actions/ContentActions";

const deleteBlogData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(delete_content(id))
        }
    }
}

export default deleteBlogData;