import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GoStack } from "react-icons/go";
import { IoIosCreate } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiUbisoftSun } from "react-icons/gi";

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open menu</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    
   <div className=' w-60  min-h-screen bg-[#FFFFFF] border-e'>
<div>
   <h1 className=' text-[#1570EF] font-mono font-bold text-center pt-5 flex items-center justify-center '><GiUbisoftSun />  <span className='px-2 text-xl '>Tajdid Store </span></h1>
</div>

    <div className='grid grid-cols-1  gap-2 pt-10 text-sm font-semibold '>
    <span className='  hover:bg-[#EFF8FF] border-s-4 border-[#EFF8FF] hover:border-s-4  hover:border-[#1570EF] p-4 '>
    <Link to={'/'} className='flex items-center'> <GoStack /> <span className='px-2'>Products</span></Link>
    </span>
    <span className=' hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-4  '>
    <Link to={'/create'} className='flex items-center'> <IoIosCreate /><span className='px-2'>Add Product</span></Link>
    </span>
    <span className='  hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#0059CF] p-4  '>
    <Link to={'/'} className='flex items-center'> <IoStatsChartOutline /> <span className='px-2'>Analytics</span></Link>
    </span>
    <span className='hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-4 '>
    <Link to={'/'} className='flex items-center'> <GoStack /> <span className='px-2'>Billing</span></Link>
    </span>
    <span className=' hover:bg-[#EFF8FF] border-s-4 hover:border-s-4 border-[#EFF8FF] hover:border-[#1570EF] p-4  '>
    <Link to={'/'} className='flex items-center'> <RiMoneyDollarCircleFill /> <span className='px-2'>Products</span></Link>
    </span>
   
   
    </div>
   </div>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;