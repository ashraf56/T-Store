import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Product from "../Component/Product";
import CreateProduct from "../Component/CreateProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path:'/',
            element:<Product></Product>
        },
        {
            path:'/create',
            element:<CreateProduct/>
        },
      ]
    },
  ]);

  export default router;