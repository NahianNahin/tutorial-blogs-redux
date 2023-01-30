import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import postBlogData from '../../redux/thunk/postBlog';

const AddBlog = () => {
    const { register, handleSubmit } = useForm();
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    const dispatch = useDispatch();
    const submit = (data) => {
        const blog = {
            headline: data.heading,
            tag: data.tag,
            question: data.question,
            answer: data.answer,
            currentDate
        };

        console.log(blog);
        dispatch(postBlogData(blog));
    };
    return (
        <div className='flex justify-center items-center h-full '>
            <div>
                <h1 className='p-5 text-xl font-semibold'>Add Blog</h1>
                <form
                    className='shadow-lg p-10 rounded-md flex flex-col gap-3 max-w-3xl justify-between bg-white'
                    onSubmit={handleSubmit(submit)}
                >
                    <div className='flex flex-col md:flex-row gap-3  max-w-3xl justify-between items-center'>
                        <div className='flex flex-col w-full'>
                            <label className='mb-2 font-semibold px-2' htmlFor='heading'>
                                Headline
                            </label>
                            <input className='input input-bordered input-success' type='text' id='heading' {...register("heading")} />
                        </div>
                        <div className='flex flex-col w-full '>
                            <label className='mb-2 font-semibold px-2' htmlFor='tag'>
                                Related Tags
                            </label>
                            <select className='input input-bordered input-success' name='tag' id='tag' {...register("tag")}>
                                <option value='HTML & CSS'>HTML & CSS</option>
                                <option value='JS'>JS</option>
                                <option value='React'>React</option>
                                <option value='Redux'>Redux</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col w-full '>
                        <label className='mb-2 font-semibold px-2' htmlFor='question'>
                            Question
                        </label>
                        <textarea
                            className="textarea textarea-bordered textarea-md w-full  resize-none"
                            placeholder="Question"
                            id='question'
                            rows="2"
                            cols="100"
                            {...register("question")}
                        ></textarea>
                    </div>
                    <div className='flex flex-col w-full '>
                        <label className='mb-2 font-semibold px-2' htmlFor='answer'>
                            Answer
                        </label>
                        <textarea
                            className="textarea textarea-bordered textarea-md w-full  resize-none"
                            placeholder="Answer"
                            id='answer'
                            rows="5"
                            cols="100"
                            {...register("answer")}
                        ></textarea>
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <button
                            className=' px-4 py-3 bg-green-600 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                            type='submit'
                        >
                            Add Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;