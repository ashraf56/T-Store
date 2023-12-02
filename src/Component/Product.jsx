import React from 'react';
import getAllproducts from '../util/getAllproducts';
import Topbar from './Topbar';

const Product = () => {
    let [product]=getAllproducts()
    console.log(product);
    return (
        <div>
            <Topbar></Topbar>
          <div>
          {
            product?.map(p=> (
                <div>
                    {p.title}
                </div>
            ))
           }
          </div>
        </div>
    );
};

export default Product;