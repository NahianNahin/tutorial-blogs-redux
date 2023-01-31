import { get_content } from "../actions/ContentActions";


const loadBlogsData = () => {
    return async(dispatch,getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();

        if(data.data.length){
            dispatch(get_content(data.data))
        }
    }
}

export default loadBlogsData;