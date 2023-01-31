import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_history, toggle_love } from '../redux/actions/ContentActions';


const BlogCard = ({ blog }) => {
    const love = useSelector(state => state.filter.love)
    const dispatch = useDispatch();
    const activeClass = "text-white  bg-orange-500 border-white";
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-orange-900'>
            <h1 className='font-bold text-center text-lg text-black'>{blog.headline}</h1>
            <p className='text-center font-semibold mb-3'>Published Date : {blog.currentDate}</p>
            <div className=' flex-1'>
                <h2 className='mb-2 font-semibold'>Ques : {blog.question}</h2>
                <p className='mb-2'>Ans : {blog.answer.slice(0, 50)}<span className='text-orange-900 font-extrabold cursor-pointer'> ...read more</span></p>
            </div>
            <div className='flex gap-2 mt-5'>
                <button
                    onClick={() => dispatch(add_to_history(blog))}
                    className='bg-orange-500 rounded-full py-1 px-2 flex-1 text-white font-bold'
                >
                    Read Details
                </button>
                <button
                    title='love'
                    onClick={() => dispatch(toggle_love(blog))}
                    className={`border px-2 py-1 rounded-full font-semibold ${love ? activeClass : null}`}
                >
                    <GiSelfLove />
                </button>
            </div>
        </div>
    );
};

export default BlogCard;