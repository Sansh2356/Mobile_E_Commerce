import React from 'react'
import Cart_item from './Cart_item'

export default function Cart_list(props) {

  const { cart } = props.value;
  console.log(cart)

  return (
    <div className='container-fluid'>
      {
        cart.map(item => {
          return <Cart_item key={item.id} item={item} value={props.value} />
        })
      }
    </div>
  )
}
