import React from 'react';
import { FaArrowLeft,FaArrowRight } from "react-icons/fa";
const Pagination = () => {
    return (
        <div  className='join relative w-full py-5 '>
            <button className="join-item btn btn-ghost absolute left-1"><FaArrowLeft /> Previous </button>

<div className=' justify-center item-center text-center absolute left-1/4 right-1/4 '>

<div className="join">
  <button className="join-item btn">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn btn-disabled">...</button>
  <button className="join-item btn">8</button>
  <button className="join-item btn">9</button>
</div>

</div>

    <button className="join-item btn btn-ghost absolute right-1">Next <FaArrowRight /></button>
        </div>
    );
};

export default Pagination;