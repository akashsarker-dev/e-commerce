import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './../ProductCard/ProductCard';
import { IoSearch } from 'react-icons/io5';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [notProduct, setNotProduct] = useState('');
  const [loading, setLoading] = useState(false);

  const [cardPopup, setCardPopup] = useState(false);

  const mobileNavRef = React.useRef(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
     setCardPopup(true);
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://e-commerce-backend-phi-eight.vercel.app/api/v1/product/search?q=${query}`);
      setResults(response.data);
      if (response.data.length === 0) {
        setNotProduct('No results found.');
      } else {
        setNotProduct('');
      }
    } catch (error) {
      console.error('Error searching products:', error);
      setResults([]);
      setNotProduct('Error searching products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        setCardPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="relative bg-white border-4 border-second-primary py-3 px-5 md:w-[600px] w-full rounded-lg mx-auto">
        <input
          className="text-lg focus:outline-none w-[90%]"
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="Search Products"
        />
        <div className="py-4 px-5 absolute top-0 right-0 w-15 h-full bg-second-primary">
          <IoSearch onClick={handleSubmit} className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      <div ref={mobileNavRef} className=" absolute top-20 left-1/2 -translate-x-1/2">
      {
        cardPopup && (
          <>
          
          {loading && <p className="text-center text-lg font-bold">Loading...</p>}
          {results.length === 0 && !loading && notProduct && (
            <p className="text-center text-lg font-bold p-2 bg-white">No products found.</p>
          )}
          {results.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          
          </>

        )
      }
      </div>
    </div>
  );
};

export default SearchProducts;
