import React from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

const CreateProduct = () => {
    return (
        <div>
              <div className=' '>
            <div className="navbar mx-auto px-5 bg-base-100">
  <div className=" navbar-center md:navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 items-center shadow bg-base-100 rounded-box w-52">
         
      <Link to={'/'} >  <button className='btn w-24 pe-4 bg-[#ffff] text-[#1570EF] mx-2'>
     Cencel
        </button></Link> 
      <Link to={'/create'} >  <button className='btn w-24 pe-4 bg-[#1570EF] text-white'>
      Create 
        </button></Link> 
      </ul>
    </div>
   <div className='text-start flex flex-col justify-start '>
   <a className=" text-xl font-bold">Create product</a>
    <a  className='text-xs lg:text-base'>Upload your product photo and details here.</a>
   </div>
  </div>
  <div className="navbar-end  hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        <Link to={'/'} >  <button className='btn w-24 pe-4 bg-[#ffff] text-[#1570EF] mx-2'>
     Cencel
        </button></Link> 
      <Link to={'/create'} >  <button className='btn w-24 pe-4 bg-[#1570EF] text-white'>
      Create 
        </button></Link> 
      
    
       
   
    </ul>
  </div>
  
</div>
        </div>

<PostForm></PostForm>
<div className='md:hidden text-center'>
<Link to={'/'} >  <button className='btn w-24 pe-4 bg-[#ffff] text-[#1570EF] mx-2'>
     Cencel
        </button></Link> 
      <Link to={'/create'} >  <button className='btn w-24 pe-4 bg-[#1570EF] text-white'>
      Create 
        </button></Link> 
</div>
        </div>
    );
};

export default CreateProduct;