import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import img from '../assets/icons8-question-mark-64.png'
import { GoStack } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { GiUbisoftSun } from "react-icons/gi";
import { FaChevronDown } from 'react-icons/fa';
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
const Dashboard = () => {

    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open menu</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    
   <div className=' w-72  min-h-screen bg-[#FFFFFF] border-e relative'>
<div>
   <h1 className=' text-[#1570EF] font-mono font-bold text-center pt-5 flex items-center justify-center '><GiUbisoftSun />  <span className='px-2 text-xl '>Tajdid Store </span></h1>
</div>

    <ul className='grid grid-cols-1  gap-0 pt-5 text-sm font-semibold  '>
    <li  className='  bg-[#EFF8FF] border-s-4 hover:border-s-4  border-[#1570EF] p-3 '>
    <NavLink to={'/'}   className='flex items-center '> <GoStack /> <span className='px-2 ac'>Products</span></NavLink>
    </li>
    <li className='  hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#0059CF] p-3 '>
    <NavLink className='flex items-center'> <IoStatsChartOutline /> <span className='px-2'>Analytics</span>
    <FaChevronDown />
    </NavLink>
  

    
    </li>
    <li className='hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-3 '>
    <NavLink  className='flex items-center'> <MdAttachMoney /> <span className='px-2'>Billing</span>
    
    <FaChevronDown />
    </NavLink>
    </li>
    <li className=' hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-3  '>
    <NavLink className='flex items-center'> <AiOutlineHome /> <span className='px-2'>Company</span></NavLink>
    </li>
    <li className=' hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-3 '>
    <NavLink className='flex items-center' > <IoLogOutOutline /><span className='px-2'>Log out</span></NavLink>
    </li>
   
    </ul>

<div className=' absolute  bottom-1  px-2'>
<div className="card max-w-full  bg-[#E0FFFF]">
<div className="avatar justify-center -mt-5">
  <div className="w-10 rounded-full ring-8 ring-white ring-offset-base-100 ring-offset-2">
    <img src={img} className='p-1'/>
  </div>
</div>
  <div className="card-body text-center">
    <h2 className=" text-center font-bold text-lg">Help Center</h2>
    <p className='text-sm'>Getting trouble on Simplebook?
Reach out and solve your problem</p>
    <div className=" ">
    <button className="btn btn-block btn-info  text-white">Consult Now</button>    </div>
  </div>
</div>
</div>

   </div>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;