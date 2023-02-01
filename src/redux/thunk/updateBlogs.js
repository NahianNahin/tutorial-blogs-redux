import { update_content } from "../actions/ContentActions";

const updateBlogData = (id, blog) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://tutorial-blogs-server-nahiannahin.vercel.app/blog/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(blog)
        });
        const data = await res.json();

        if (data.acknowledged) {
            console.log("update");
            dispatch(update_content(id, blog));
        }
    }
}

export default updateBlogData;