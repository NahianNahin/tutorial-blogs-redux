import React, { useEffect } from 'react';
import { GrEdit } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selected_blog } from '../../redux/actions/ContentActions';
import deleteBlogData from '../../redux/thunk/deleteBlog';
import loadBlogsData from '../../redux/thunk/fetchBlog';

const BlogsList = () => {
  const blogs = useSelector(state => state.blog.blogs)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBlogsData())
  }, [dispatch])
  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Blogs List</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>HeadLine</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Tag</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Publish Date</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Edit</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {blogs.map((blog) => (
                <tr>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{blog.headline}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{blog.tag}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left font-medium text-orange-500'>
                      {blog.currentDate}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <button onClick={() => dispatch(deleteBlogData(blog._id))}>
                        <svg
                          className='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <Link to={`edit-blog/${blog._id}`}>
                        <button onClick={() => dispatch(selected_blog(blog))}>
                          <GrEdit className='text-lg' />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;