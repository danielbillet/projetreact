import {createBrowserRouter} from "react-router-dom"
import { ErrorPage } from "./components/ErrorPage" 
import { HomePage } from "./components/HomePage"
import { PanierPage } from "./components/PanierPage"





const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage/>,
    }     ,   
        
            {
                  path: "/PanierPage",
                  element: <PanierPage/>
              } 
])

export default router

