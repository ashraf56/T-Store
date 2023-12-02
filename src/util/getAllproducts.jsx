import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getAllproducts = () => {

    const {data:product=[], isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () =>{ 
          const res = await axios.get('https://fakestoreapi.com/products')
    
          return res.data;
      }
    })
    
   
    return [product]
};

export default getAllproducts;