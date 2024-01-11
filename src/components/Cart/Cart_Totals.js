import React from 'react'
import {Link} from 'react-router-dom'

export default function Cart_Totals(props) {
  const {cartSubTotal,cartTotal,cartTax,clearCart} = props.value;
  return (
   <>
   <div className='container'>
      <div className='row'>
        <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right'>
          <Link to='/'>
            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' onClick={()=>{clearCart()}}>Clear Cart</button>
          </Link>
          <h4>
            <span className='text-title'>SubTotal:</span>
            <strong>₹ {cartSubTotal}</strong>
          </h4>
          <h4>
            <span className='text-title'>Tax:</span>
            <strong>₹ {cartTax}</strong>
          </h4>
          <h4>
            <span className='text-title'>CartTotal:</span>
            <strong>₹ {cartTotal}</strong>
          </h4>
        </div>
      </div>
   </div>
   </>
  )
}
