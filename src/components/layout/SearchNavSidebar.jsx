import React from 'react';

export default function SearchNavSidebar() {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-white">
      <header className="flex justify-between items-center p-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black">Shofy.</span>
        </div>
        <button  className="text-gray-400 bg-red-600 text-2xl focus:outline-none">
          &times;
        </button>
      </header>

      <div className="p-4">
        <div className="flex items-center border rounded-md shadow-sm">
          <input type="text" className="flex-grow p-2 outline-none" placeholder="Search for products..." />
          <button className="p-2 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1114 0 7 7 0 01-14 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4 flex-grow">
        <nav>
          <div className="mb-4">
            <button className="flex items-center justify-between w-full p-2 text-left text-black border rounded-md shadow-sm bg-blue-500 text-white">
              <span>All Department</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Home
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Shop
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Vendors
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Pages
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Blog
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center p-2 border rounded-md shadow-sm text-black hover:bg-gray-100">
                Contact
                <button className="text-gray-400 focus:outline-none">&times;</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-4">
        <button className="w-full p-2 text-white bg-blue-500 rounded-md shadow-sm focus:outline-none">Contact Us</button>
      </div>
    </div>
  );
}
