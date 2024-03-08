import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Rootlayout } from "./components/layout/Rootlayout.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/Products/Products.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
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