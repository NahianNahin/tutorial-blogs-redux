import { fetching_start, get_content } from "../actions/ContentActions";


const loadBlogsData = () => {
    return async(dispatch,getState) => {
        dispatch(fetching_start());
        const res = await fetch("https://tutorial-blogs-server-nahiannahin.vercel.app/blogs");
        const data = await res.json();

        if(data.data.length){
            dispatch(get_content(data.data))
        }
    }
}

export default loadBlogsData;