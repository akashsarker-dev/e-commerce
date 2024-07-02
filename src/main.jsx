import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from 'react-redux';
import { Rootlayout } from './pages/Rootlayout/Rootlayout';
import Home from "./pages/home/Home.jsx";
import Registration from "./pages/signup/Registration.jsx";
import Login from "./pages/login/Login.jsx";
import { Notfound } from "./pages/notfound/Notfound.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Shop from './pages/Shop/Shop';
import Cart from "./pages/cart/Cart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import SuccessMessage from "./pages/SuccessMessage/SuccessMessage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import Products from './pages/products/Products';
import Store from "./Store.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import { createRoot } from 'react-dom/client';


const App = () => (
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
        
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cart' element={
             <PrivateRoute>
             <Cart />
           </PrivateRoute>
            
            } />
          <Route path='/products' element={<Shop />} />
          <Route path='/products/:id' element={<Products />} />
          
           <Route
          path="/checkout"
          element={
            <PrivateRoute>


              <Checkout /> 
            </PrivateRoute>
          }
        />
          <Route path='/contactpage' element={<ContactPage />} />
          <Route path='/successmessage' element={<SuccessMessage />} />
          <Route path="*" element={<Notfound />} />
        </Route>
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  </Provider>
);

createRoot(document.getElementById("root")).render(<App />);

