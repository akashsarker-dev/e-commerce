import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Rootlayout } from "./components/layout/Rootlayout.jsx";
import Home from "./pages/home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Registration from "./pages/signup/Registration.jsx";
import Login from "./pages/login/Login.jsx";
import { Notfound } from "./pages/notfound/Notfound.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Shop from './pages/Shop/Shop';
import { Provider } from 'react-redux'
import store from "./store.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contacts' element={<Contacts />} />
      {/* <Route path='/product' element={<Products />} /> */}
      {/* <Route path='/cart' element={<Cart />} /> */}
      <Route path='/products' element={<Shop />} />
      <Route path='/products/:id' element={<Products/>} />

      <Route path="*" element={<Notfound />} />
    </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
     <RouterProvider router={router} />
    </Provider>
);
