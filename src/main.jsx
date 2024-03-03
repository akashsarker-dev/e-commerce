import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Rootlayout } from "./components/layout/Rootlayout.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Productinfo from "./pages/productinfo/Productinfo.jsx";
import Registration from "./pages/signup/Registration.jsx";
import Login from "./pages/login/Login.jsx";
import { Notfound } from "./pages/notfound/Notfound.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login' element={<Contacts />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/productinfo' element={<Productinfo />} />
      <Route path="*" element={<Notfound />} />
    </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import App from './App.jsx'
// import ProductDetails from "./pages/productdetails/ProductDetails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   }, 
//    {
//     path: "/productdetails",
//     element: <ProductDetails/>
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );