// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import { FaPlus } from 'react-icons/fa6';
// import { HiMinusSm } from 'react-icons/hi';

// const Cart = () => {
//   const columns = [
//     {
//       name: 'Name',
//       selector: row => row.product?.name,
//       sortable: true
//     },
//     {
//       name: 'Price',
//       selector: row => row.price,
//       sortable: true
//     },
//     {
//       name: 'Image',
//       cell: row => <img src={row.product?.image} alt="Product" style={{ width: '50px', height: '50px' }} />,
//       sortable: true
//     },
//     {
//       name: 'Quantity',
//       cell: row => (
//         <div>
//           <button onClick={() => decreaseQuantity(row)}><HiMinusSm></HiMinusSm></button>
//           {row.quantity}
//           <button onClick={() => increaseQuantity(row)}><FaPlus></FaPlus></button>
//         </div>
//       ),
//       sortable: true
//     },
//     {
//       name: 'Total',
//       selector: row => row.price * row.quantity,
//       sortable: true
//     },
//   ];

//   const [productInfo, setProductInfo] = useState([]);

//   useEffect(() => {
//     async function fetchProductInfo() {
//       try {
//         const response = await axios.get("http://localhost:3000/api/v1/product/getvariants");
//         setProductInfo(response.data);
//       } catch (error) {
//         console.error("Error fetching product info:", error);
//       }
//     }
//     fetchProductInfo();
//   }, []);

//   const formattedData = productInfo.map(item => ({
//     ...item,
//     quantity: 1,
//     product: item.product
//   }));

//   const increaseQuantity = (row) => {
//     setProductInfo(prevState => prevState.map(item => {
//       if (item.id === row.id) {
//         return { ...item, quantity: row.quantity + 1 };
//       }
//       return item;
//     }));
//   };

//   const decreaseQuantity = (row) => {
//     setProductInfo(prevState => prevState.map(item => {
//       if (item.id === row.id && item.quantity > 1) {
//         return { ...item, quantity: item.quantity - 1 };
//       }
//       return item;
//     }));
//   };

//   return (
//     <>
//       <DataTable
//         title="Product Data"
//         columns={columns}
//         data={formattedData}
//         pagination
//         highlightOnHover
//       />
//     </>
//   );
// };

// export default Cart;
