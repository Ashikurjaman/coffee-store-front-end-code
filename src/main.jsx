import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Errorpage from "./Components/ErrorPage/Errorpage.jsx";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import AuthContext from "./Context/AuthContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader:()=>fetch('http://localhost:5000/coffee'),
    
  },
  
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },{
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    
  },{
    path:'error',
    element:<Errorpage></Errorpage>
  },{
    path:'/signup',
    element:<SignUp></SignUp>
  },{
    path:'/login',
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>

    <RouterProvider router={router} />
    </AuthContext>
     
  </React.StrictMode>
);
