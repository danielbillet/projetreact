import {createBrowserRouter} from "react-router-dom"
import { ErrorPage } from "./components/ErrorPage" 
import { Panier } from "./components/Panier"

import { HomePage } from "./components/HomePage"



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage/>,
        
         children: [
            {
                  path: "/panier",
                  element: <Panier/>
              }
         ]
    }
]) 

export default router

