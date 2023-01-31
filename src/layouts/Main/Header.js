import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { get_keyword } from "../../redux/actions/FilterActions";


const Header = () => {
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    dispatch(get_keyword(search));
  }
  return (
    <nav className='h-14 bg-orange-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1 className="font-semibold text-lg ">IT Tutorial Blogs</h1>
        <form onSubmit={submit} className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none px-5'
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </form>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/reading-history'>Reading History</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Header;
