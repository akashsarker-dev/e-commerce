import React from 'react';

const SuccessMessage = ({ orderId, amount }) => {
  return (
    <div className="max-w-4xl my-4 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <svg className="h-16 w-16 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-3.707-5.293a1 1 0 1 1 1.414-1.414l2.293 2.293 5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3z" clipRule="evenodd" />
        </svg>
        <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Thank you for your order.</p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-500">Order ID: <span className="font-semibold">{orderId}</span></p>
          <p className="text-sm text-gray-500">Amount Paid: <span className="font-semibold">${amount}</span></p>
        </div>
        <p className="text-gray-600">Your order details have been sent to your email address.</p>
      </div>
    </div>
  );
};

export default SuccessMessage;
