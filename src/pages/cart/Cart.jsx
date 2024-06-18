import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaPlus } from 'react-icons/fa6';
import { HiMinusSm } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../slices/CartSlice';
import { act } from 'react';

const Cart = () => {
  const [productInfo, setProductInfo] = useState([]);

  // Get cart details from Redux state
  const cartDetails = useSelector(state => state.cartDetails.value);

  // Update productInfo when cartDetails change
  useEffect(() => {
    setProductInfo(cartDetails);
  }, [cartDetails]);

  // Format data for DataTable


  const formattedData = productInfo.map(item => (
    {
    ...item,
    quantity: 1,
    product: item.product
  }));


  const dispatch = useDispatch();
  const decreaseQuantity = (index) => {
    dispatch(updateQuantity({id : index, qun , act: 'sub'}));
  };

  const [qun, setQun] = useState(1);
  const increaseQuantity = (index) => {
    console.log(index);
    dispatch(updateQuantity({id : index, qun , act: 'add'}));
  };

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
        selector: row => row.price,
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
      selector: row => row.price * row.quantity,
      sortable: true
    },
  ];

  return (
    <div className="p-4 container mx-auto">
      <DataTable
        title="Product Data"
        columns={columns}
        data={formattedData}
        pagination
        highlightOnHover
      />
    </div>
  );
};

export default Cart;
