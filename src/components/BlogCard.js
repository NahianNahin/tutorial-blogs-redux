import React from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_history } from '../redux/actions/ContentActions';
import BlogModal from './BlogModal';


const BlogCard = ({ blog }) => {
    const modal = useSelector(state => state.blog.modal);
    const dispatch = useDispatch();
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-orange-900'>
            <h1 className='font-bold text-center text-lg text-black'>{blog.headline}</h1>
            <p className='text-center font-semibold mb-3'>Published Date : {blog.currentDate}</p>
            <div className=' flex-1'>
                <h2 className='mb-2 font-semibold'>Ques : {blog.question}</h2>
                <p className='mb-2'>Ans : {blog.answer.slice(0, 50)}<span className='text-orange-900 font-extrabold cursor-pointer'> ...read more</span></p>
            </div>
            <div className='flex gap-2 mt-5'>
                <label
                    htmlFor="modal-blog"
                    onClick={() => dispatch(add_to_history(blog))}
                    className='bg-orange-500 rounded-full py-1 px-2 flex-1 text-white font-bold cursor-pointer text-center'
                >
                    Read Details
                </label>
                <button
                    title='love'
                    className={`border px-2 py-1 rounded-full font-semibold`}
                >
                    <GiSelfLove />
                </button>
            </div>
            <BlogModal modal={modal}></BlogModal>
        </div>
    );
};

export default BlogCard;