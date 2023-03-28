import React from "react"
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import About from "./Portfolio/Portfolio"
import Home from "./Home/Home"
import Layout from "./Layout/Layout"
import Portfolio from "./Portfolio/Portfolio"
import Contact from "./Contact/Contact"


      let routers= createBrowserRouter([
         {path:'',element:<Layout/>,children:[
            {path:'#home',element:<Home/>},
            {path:'#about',element:<About/>},
            {path:'#portfolio',element:<Portfolio/>},
            {path:'#contact',element:<Contact/>},
         ]}
      ])

export default function App(){

   return  <RouterProvider router={routers}></RouterProvider>
   
}