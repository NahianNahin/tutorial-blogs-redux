import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import loadBlogsData from "../../redux/thunk/fetchBlog";

const Home = () => {
    const activeClass = "text-white  bg-orange-500 border-white";
    const blogs = useSelector(state => state.blog.blogs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch])
    let content;
    if (blogs.length) {
        content = blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
        ))
    }
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
                >
                    Last Date
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    HTML & CSS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    JS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    React
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold`}
                >
                    Redux
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10 px-5'>
                {content}
            </div>
        </div>
    );
};

export default Home;