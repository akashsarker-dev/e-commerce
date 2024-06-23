import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartDetails = useSelector(state => state.cartDetails.value);
  const [qun, setQun] = useState([]);

  useEffect(() => {
    setQun(cartDetails);
  }, [cartDetails]);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    county: '',
    phone: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        county: data.county,
        phone: data.phone,
        city: data.city,
        // You might want to add more fields here as per your API requirements
      };

      // Example POST request to your API endpoint
      const response = await axios.post('https://e-commerce-backend-phi-eight.vercel.app/api/v1/payment/sslcommerz', postData);

      // Redirect to SSLCommerz checkout page
      window.location.replace(`https://sandbox.sslcommerz.com/EasyCheckOut/${response.data.url}`);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl w-full mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="mb-2 text-gray-700 text-md font-bold">
                First Name *
              </label>
              <input
                onChange={handleChange}
                name="firstName"
                type="text"
                id="firstName"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="First Name"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-2 text-gray-700 text-md font-bold">
                Last Name *
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                id="lastName"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label htmlFor="city" className="mb-2 text-gray-700 text-md font-bold">
                Town/City *
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="city"
                id="city"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Town/City"
              />
            </div>
            <div>
              <label htmlFor="county" className="mb-2 text-gray-700 text-md font-bold">
                County
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="county"
                id="county"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="County"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 text-gray-700 text-md font-bold">
                Phone *
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="phone"
                id="phone"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Phone"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="email" className="mb-2 text-gray-700 text-md font-bold">
                Email Address *
              </label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Email"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Order</h2>
          <div className="border-t border-b border-gray-300 py-4 mb-4">
            {qun.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.product}</span>
                <span>${item.price * item.qun}</span> {/* Adjusted to show total price for each item */}
              </div>
            ))}
            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <span className="font-bold">
                ${qun.reduce((acc, item) => acc + item.price * item.qun, 0)} {/* Adjusted to calculate total correctly */}
              </span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            Proceed to Bank
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
