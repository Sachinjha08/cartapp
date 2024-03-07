
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const item = useSelector((state)=>state.cart)
  const removeHandle = (id) =>{
    dispatch(remove(id))
  }
  return (
    <div className = 'container'>
      {
        item.map((product) => (
          <div className='product'>
            <img src={product.image} alt="img" />
            <h2>{product.title}</h2>            
            <h3>{product.price}</h3>
            <button className = 'btn' onClick={()=>removeHandle(product.id)}>Remove from cart</button>
          </div>
        )
      )}
    </div>
  )
}

export default Cart