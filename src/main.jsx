import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/signup/Registration.jsx";
import Login from "./pages/login/Login.jsx";
import { Notfound } from "./pages/notfound/Notfound.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Shop from './pages/Shop/Shop';
import { Provider } from 'react-redux'
import store from "./store.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import SuccessMessage from "./pages/SuccessMessage/SuccessMessage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import Products from './pages/products/Products';
import { Rootlayout } from './pages/Rootlayout/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/products' element={<Shop />} />
      <Route path='/products/:id' element={<Products/>} />
      <Route path='checkout' element={<Checkout/>} />
      <Route path='contactpage' element={<ContactPage/>} />
      <Route path='successmessage' element={<SuccessMessage/>} />
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
