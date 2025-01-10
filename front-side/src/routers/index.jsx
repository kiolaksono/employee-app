import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import RootLayout from "../layouts/RootLayout";
import AddEmployee from "../pages/AddEmployee";
import Employee from "../pages/Employee";


export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>,
        loader:()=>{
            const access_token = localStorage.getItem("access_token")
            if(access_token) throw redirect("/cms")
            return null
        },
    },
    {
        path:"/",
        element:<RootLayout />,
        loader:()=>{
            const access_token = localStorage.getItem("access_token")
            if(!access_token) throw redirect("login")
            return null
        },
        children:[
            {
                path:"",
                element:<HomePage/>

            },
            {
                path:"/addemployee",
                element:<AddEmployee/>
            },
            {
                path:"/employee/:id",
                element:<Employee/>
            }
        ]
    }
])