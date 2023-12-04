import React, { useState } from 'react';
import Topbar from './Topbar';
import axios from 'axios';
import { useQuery } from 'react-query';

const Product = () => {
    const {data, refetch } = useQuery(
        ['products'],
         async() => { 
          const res = await axios.get('http://localhost:4000/product')
          
          return  res.data;
      }
    )
let [allproduct,setAllroduct]=useState(null)
    const openModal = (p) => {
      setAllroduct(p)
        const modal = document.getElementById('my_modal_1');
      if (!modal) {
       return 
      }
      else{
        modal.showModal();
      }
      
      };
      const handleCloseModal = () => {
        const modal = document.getElementById('my_modal_1');
        if (modal) {
          
          modal.close();
        }
      };

const deletData=(id)=>{
  fetch(`http://localhost:4000/product/${id}`,{
    method:"DELETE"
})
    .then(res=>res.json())
    .then(json=>{
      if (json.deletedCount>0) {
        console.log(json);
        handleCloseModal()
        refetch()
      }
    })
    

}

    console.log(data);
    return (
        <div>
            <Topbar></Topbar>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto px-5 py-5'>
          {
         data?.length === 0 ? 'loading..'  :( data?.map(p=> (
                <div key={p._id}>
                    <div className="card card-compact max-w-full lg:max-w-lg h-full bg-base-100 shadow-xl">
  <figure><img src={p?.image} alt="Shoes" className='h-[214px]' /></figure>
  <div className="card-body">
    <div className='flex justify-between'>
        <div>
        <h2 className="card-title">${p?.price}</h2>
   <div className='flex'>
    <div className="rating rating-sm">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  
</div><p className='px-2 text-orange-500'>{p?.rating.rate}</p> </div>
        </div>

<button className="btn  btn-sm "  onClick={()=>openModal(p)}>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64" fill='#E50000' >
<path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
</svg></button>

    </div>
   
    
    <p>{p?.title}</p>
   
  </div>
</div>
                </div>
            ))) 
           }
          </div>

   {/* modal      */}
{allproduct ? (<dialog id="my_modal_1" className="modal  bg-[#34405454] backdrop-blur-lg">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Delete product</h3>
    <p className="py-4">Are you sure you want to delete "<span>{allproduct?.title}</span>"  from your lists?</p>
    <div className='text-center '>
<button className='btn btn-outline text-red-400  mx-3 px-14' onClick={handleCloseModal}>Close</button>
<button className='btn btn-error text-white  px-14 ' onClick={()=>deletData(allproduct._id)} >Delete</button>
    </div>
  </div>
</dialog>):   
<dialog id="my_modal_1" className="modal  bg-[#34405454] backdrop-blur-lg">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Delete product</h3>
    <p className="py-4">Are you sure you want to delete "<span>{allproduct?.title}</span>"  from your lists?</p>
    <div className='text-center '>
<button className='btn btn-outline text-red-400  mx-3 px-14' onClick={handleCloseModal}>Close</button>
<button className='btn btn-error text-white  px-14 ' onClick={()=>deletData(allproduct?._id)} >Delete</button>
    </div>
  </div>
</dialog>
}
        </div>
    );
};

export default Product;