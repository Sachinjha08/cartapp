
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { add } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const [products,setProducts] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
  },[])
  const handleAdd = (product) =>{
    dispatch(add(product));
  }
  return (
    <div className='container'>
      {
        products.map((product) => (
          <div className='product' key={product.id}>
            <img src={product.image} alt="img" />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <button className = 'btn' onClick={()=>handleAdd(product)}>Add to cart</button>
          </div>
        )
      )}
    </div>
  )
}

export default Home