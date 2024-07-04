import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../mainlayout/Mainlayout";
import Home from "../Pages/home/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            }
        ]      
    }
])

export default router