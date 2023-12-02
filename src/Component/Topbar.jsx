import React from 'react';
import { Link } from 'react-router-dom';
import aimg from '../assets/Avatar.png'
const Topbar = () => {
    return (
        <div className='container '>
            <div className="navbar mx-auto px-5 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 items-center shadow bg-base-100 rounded-box w-52">
         
      <Link to={'/create'} >  <button className='btn w-32 pe-4'>
             create
        </button></Link> 
        <div  role="button" className="btn btn-ghost btn-circle avatar mx-3">
        <div className="w-10 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className=''>
            <p className='text-md '>Andrew Kyu</p>
            <p >user</p>
           </div>
      <li className='mx-3'>
        <details>
          <summary>
          

          </summary>
          <ul className="p-2 bg-base-100 ">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Products</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <Link to={'/create'} >  <button className='btn w-32 pe-4 bg-[#1570EF] text-white'>
      Create new
        </button></Link> 
        <div  role="button" className="btn btn-ghost btn-circle avatar mx-3">
        <div className="w-10 rounded-full ">
          <img alt="Tailwind CSS Navbar component" src={aimg} />
        </div>
      </div>
      <div className=''>
            <p className='text-md font-semibold '>Andrew Kyu</p>
            <p className='text-sm' >user</p>
           </div>
      <li className='mx-3'>
        <details>
          <summary>
          

          </summary>
          
        </details>
      </li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Topbar;