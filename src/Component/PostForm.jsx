import React from 'react';
import { useForm } from 'react-hook-form';
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const PostForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
      
    let img='https://static.vecteezy.com/system/resources/thumbnails/017/054/078/small/headphones-design-3d-rendering-for-product-mockup-free-png.png'
    
      const onSubmit = (data) =>{
        
       
    
        fetch('https://tstore.onrender.com/product', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
                title: data.title,
                price: data.price,
                description: data.description,
                image: img,
                category: 'electronic',
                rating:{rate:3.9,count:100}
            }
          )
        })
        .then(res => res.json())
        .then(data =>{
    
          console.log(data);
         
        });
     reset()
      }
    return (
        <form className='card mx-5' onSubmit={handleSubmit(onSubmit)}>

<div className=' '>
            <div className="navbar mx-auto px-5 bg-base-100">
  <div className=" navbar-center md:navbar-start">
  
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
      <button className='btn w-24 pe-4 bg-[#1570EF] text-white'>
      Create 
        </button>
      
    
       
   
    </ul>
  </div>
  
</div>
        </div>
            <hr />
            <div className=' md:flex  gap-x-56  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Title</h1>
                </div>
                <div className='w-full'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl " {...register('title',{required: "Title is required"})} />
                    {
                  errors.title && (
                    <p className='text-xs pt-2 text-red-800'>{errors.title.message}</p>
                  )
                }
                </div>
                
            </div>
            <hr />
         
            <div className=' md:flex  gap-x-56  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Price</h1>
                </div>
                <div className='w-full block'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl " {...register('price', {required:'enter price'})} />
                      {
                  errors.price && (
                    <p className='text-xs pt-2 text-red-800'>{errors.price.message}</p>
                  )
                }
                </div>
              
            </div>
            <hr />
         
            <div className=' md:flex  gap-x-24  px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold'>Product photo</h1>
                <p className='text-xs'>This will be displayed on your product</p>
                </div>
                <div className='max-w-lg '>
                <div className="card lg:card-side ">
<div className='card shadow-md items-center justify-center'>
<figure><img src={img}  alt="Album"/></figure>
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
         
            <div className=' md:flex  gap-x-40 px-10 py-10 justify-start items-center'>
                <div >
                <h1 className='font-semibold '>Description</h1>
                <p className='text-xs'>Write a short introduction.</p>
                </div>
                <div className='w-full'>
                <textarea placeholder="Write something about your products..." className="textarea textarea-bordered  w-full max-w-xl h-32" {...register('description',{required:'Write something here'})} ></textarea>
                <p className='text-xs label-text'>275 characters left</p>
              {errors.description && (
                <p className='text-xs text-red-800'>{errors.description.message}</p>
              )}
                </div>
                
            </div>
            <hr />
          
           
        </form>
    );
};

export default PostForm;