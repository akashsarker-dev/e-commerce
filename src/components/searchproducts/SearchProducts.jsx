// SearchProducts.js

import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './../ProductCard/ProductCard';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/product/search?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching products:', error);
      setResults([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search products..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {results.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
