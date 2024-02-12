import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Errorpage from "./Components/ErrorPage/Errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App>Hello world!</App>,
  },
  {
    path:'addCoffee',
    element:<AddCoffee></AddCoffee>
  },{
    path:'updateCoffee',
    element:<UpdateCoffee></UpdateCoffee>
  },{
    path:'error',
    element:<Errorpage></Errorpage>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
