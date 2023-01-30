import { add_content } from "../actions/ContentActions";


const postBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blog", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog)
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(add_content({
                _id: data.insertedId,
                ...blog
            }))
        }
    }
}

export default postBlogData;