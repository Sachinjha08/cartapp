
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar = () => {
  const item = useSelector((state)=>state.cart)
  return (
   <div className='navbox'>
    <div className='title'>
    <p>Cart System</p>
    </div>
    <div className='nav'>
      <Link to = '/'>Home</Link>
      <Link to = '/Cart'>Cart:</Link>
      <p>{item.length}</p>
    </div>
   </div>
  )
}

export default Navbar