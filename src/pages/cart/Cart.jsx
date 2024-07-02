import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaPlus } from 'react-icons/fa6';
import { HiMinusSm } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../slices/CartSlice';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  let location = useLocation();
  console.log(location, 'gggg');
  const [productInfo, setProductInfo] = useState([]);

  const cartDetails = useSelector(state => state.cartDetails.value);

  useEffect(() => {
    setProductInfo(cartDetails);
  }, [cartDetails]);

  const formattedData = productInfo.map(item => ({
    ...item,
    quantity: 1,
    product: item.product
  }));
  
  const dispatch = useDispatch();
  const decreaseQuantity = (index) => {
    dispatch(updateQuantity({id : index, qun , act: 'sub'}));
  };
const navigate = useNavigate();
  const handleClick = () => {
  
    navigate('/checkout', )
  }

  const [qun, setQun] = useState(1);
  const increaseQuantity = (index) => {
    console.log(index);
    dispatch(updateQuantity({id : index, qun , act: 'add'}));
  };

  const tolal = productInfo.reduce((acc, item) => acc + item.price * item.qun, 0);
  console.log(tolal);

  const columns = [
    // {
    //   name: 'Name',
    //   selector: row => row.name,
    //   sortable: true
    // },
    {
      name: 'Image',
      cell: row =>
        
        <img src={row.image} alt="Product" style={{ width: '50px', height: '50px' }} />,
        sortable: true
      },
      {
        name: 'Price',
        selector: row => row.price ,
        sortable: true
      },
    {
      name: 'Quantity',
      cell: (row , index) => (
        <div className='flex gap-4'>
          <button onClick={() => decreaseQuantity(index)}><HiMinusSm /></button>
          {row.qun}
          <button onClick={() => increaseQuantity(index)}><FaPlus /></button>
        </div>
      ),
      sortable: true
    },
    {
      name: 'Total',
      selector: row => row.price *  row.qun
    },
  ];

  return (
    <div className="p-4 container mx-auto">
    <DataTable
      title="Product Data"
      columns={columns}
      data={formattedData}
      progress
      pagination
      responsive
      highlightOnHover
    
      />

    <div className="text-right">
      <h3 className="text-md font-bold">Total: ${tolal}</h3>

      <button onClick={handleClick}  className="bg-blue-500 text-white text-md font-bold rounded p-2 mt-4">
     
  Proceed to checkout
      </button>
    </div>
  </div>
  );
};

export default Cart;
