import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductImg from '../../assets/product.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Items({ currentItems }) {
  const getFirst10Words = (text) => {
    return text.slice(0, 28);
  };
  const getFirst5letter = (text) => {
    return text.slice(0, 28);
  };
  return (
    <div className='grid md:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2'>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item._id}>
            <div className="border-[1px] p-2 border-gray-400 rounded-xl hover:shadow-xl duration-300 overflow-hidden cursor-pointer group">
              <Link to={`/products/${item?._id}`}>
                <img
                  className=" duration-500 overflow-hidden rounded-md" src={item.variants[0]?.image} alt="" />
                  <Link to={`/products/${item?._id}`} className="text-primary font-bold text-sm">{getFirst5letter(item.name)}...</Link>
                  <p>{getFirst10Words(item.description)}...</p>
                  {/* Render other properties as needed */}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default function Paginate({ itemsPerPage }) {
  const [product, setProduct] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://e-commerce-backend-phi-eight.vercel.app/api/v1/product/getallproduct');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='flex items-center justify-between'>
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={itemOffset === 0 ? "" : "< previous"}
          pageClassName="page-item"
          pageLinkClassName="page-link inline-block border border-[#262626] px-2 py-1"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="flex gap-2.5 items-center py-4"
          activeClassName="active bg-[#262626] text-white"
          renderOnZeroPageCount={null} />
        <p>Products from {itemOffset} to {endOffset} of {product.length}</p>
      </div>
    </>
  );
}
