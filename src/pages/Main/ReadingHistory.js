import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from '../../components/BlogCard';

const ReadingHistory = () => {
    const history = useSelector(state => state.blog.history);
    let content;
    if (history.length) {
        content = history.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
        ))
    }
    return (
        <div>
            <h1 className='text-center text-lg font-semibold py-3'>Reading History</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10 px-5'>
                {content}
            </div>
        </div>
    );
};

export default ReadingHistory;