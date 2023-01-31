import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import { toggle_first_or_last_upload, toggle_tag } from "../../redux/actions/FilterActions";
import loadBlogsData from "../../redux/thunk/fetchBlog";

const Home = () => {
    const activeClass = "text-white  bg-orange-500 border-white";
    const blogs = useSelector(state => state.blog.blogs);
    const filters = useSelector(state => state.filter.filters);
    const { tags, firstDate } = filters;
    const keyword = useSelector(state => state.filter.keyword);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogsData())
    }, [dispatch])
    let content;
    if (firstDate) {
        if (blogs.length || tags.length) {
            content = blogs
                .filter(blog => {
                    if (keyword) {
                        return (
                            blog.headline.toLowerCase().includes(keyword.toLowerCase())
                            ||
                            blog.question.toLowerCase().includes(keyword.toLowerCase())
                        )
                    }
                    return blog;
                })
                .filter(blog => {
                    if (tags.length) {
                        return tags.includes(blog.tag);
                    }
                    return blog;
                })
                .reverse()
                .map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))
        }
    }
    else {
        if (blogs.length || tags.length) {
            content = blogs
                .filter(blog => {
                    if (keyword) {
                        return (
                            blog.headline.toLowerCase().includes(keyword.toLowerCase())
                            ||
                            blog.question.toLowerCase().includes(keyword.toLowerCase())
                        )
                    }
                    return blog;
                })
                .filter(blog => {
                    if (tags.length) {
                        return tags.includes(blog.tag);
                    }
                    return blog;
                })
                .sort()
                .map((blog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))
        }
    }
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button
                    className={`border px-3 py-2 rounded-full font-bold ${firstDate ? activeClass : null} `}
                    onClick={() => dispatch(toggle_first_or_last_upload())}
                >
                    Recent Date
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-bold ${!firstDate ? activeClass : null} `}
                    onClick={() => dispatch(toggle_first_or_last_upload())}
                >
                    Last Date
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("HTML & CSS") ? activeClass : null} `}
                    onClick={() => dispatch(toggle_tag("HTML & CSS"))}
                >
                    HTML & CSS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("JS") ? activeClass : null} `}
                    onClick={() => dispatch(toggle_tag("JS"))}
                >
                    JS
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("React") ? activeClass : null} `}
                    onClick={() => dispatch(toggle_tag("React"))}
                >
                    React
                </button>
                <button
                    className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("Redux") ? activeClass : null} `}
                    onClick={() => dispatch(toggle_tag("Redux"))}
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