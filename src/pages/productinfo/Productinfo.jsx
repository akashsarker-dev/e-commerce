import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Productinfo() {
  const {id} = useParams()
  console.log(id);


  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/product/getallproduct');
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchData();
  }, []);
  const data = product.find(item => item._id === id)
  console.log(data);

  return (
    <div>Productinfo</div>
  )
}
