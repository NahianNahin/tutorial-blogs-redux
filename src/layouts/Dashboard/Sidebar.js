import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='col-span-2 bg-orange-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3  flex-col h-full'>
        <li className="font-semibold">Admin Dashboard</li>
        <li>
          <Link to='/dashboard'>Blogs List</Link>
        </li>
        <li>
          <Link to='add-blog'> Add Blog </Link>
        </li>
        <li>
          <Link to='edit-blog'> Edit Blog </Link>
        </li>
        <li className='mt-auto'>
          <Link to='/' className="font-semibold"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;