import React from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";


const PostForm = () => {
    return (
        <form className='card mx-5'>
            <hr />
            <div className=' md:flex  gap-56  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Title</h1>
                </div>
                <div className='w-full'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl " />
                </div>
                
            </div>
            <hr />
         
            <div className=' md:flex  gap-56  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Price</h1>
                </div>
                <div className='w-full block'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl " />
                    
                </div>
                
            </div>
            <hr />
         
            <div className=' md:flex  gap-28  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold'>Product photo</h1>
                <p className='text-xs'>This will be displayed on your product</p>
                </div>
                <div className='max-w-lg '>
                <div className="card lg:card-side ">
<div className='card shadow-md items-center justify-center'>
<figure><img src="https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png" alt="Album"/></figure>
</div>
  <div className="card-body h-full shadow-md">

<div className=' md:p-10 items-center text-center '>
     <h2 className="card-title text-center justify-center py-8"><IoCloudUploadOutline /></h2>
    <p className='text-xs'><span className='text-blue-600 font-bold'>Click to upload</span> or drag and drop</p>
    <p  className='text-xs'>SVG, PNG, JPG or GIF (max. 800x400px)</p>
</div>
   
    
  </div>
</div>
                </div>
                
            </div>
            <hr />
         
            <div className=' md:flex  gap-36 px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Description</h1>
                <p className='text-xs'>Write a short introduction.</p>
                </div>
                <div className='w-full'>
                <textarea placeholder="Write something about your products..." className="textarea textarea-bordered textarea-lg w-full max-w-xl" ></textarea>
                <p className='text-xs label-text'>275 characters left</p>
                </div>
                
            </div>
            <hr />
         
           
        </form>
    );
};

export default PostForm;