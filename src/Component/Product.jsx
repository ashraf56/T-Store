import React from 'react';
import Topbar from './Topbar';
import axios from 'axios';
import { useQuery } from 'react-query';

const Product = () => {
    const {data, refetch } = useQuery(
        ['products'],
         async() => { 
          const res = await axios.get('https://dummyjson.com/products')
          
          return  res.data.products;
      }
    )
    console.log(data);
    return (
        <div>
            <Topbar></Topbar>
          <div>
          {
         data?.length === 0 ? 'loading..'  :( data?.map(p=> (
                <div>
                    {p.title}
                </div>
            ))) 
           }
          </div>
        </div>
    );
};

export default Product;