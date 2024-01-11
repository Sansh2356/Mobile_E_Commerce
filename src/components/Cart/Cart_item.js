import React from 'react'

export default function Cart_item(props) {
  //item and value//
  console.log(props.item)
  const { id, title, img, price, total, count } = props.item;
  const { increment, decrement, removeItem } = props.value;

  return (
    <div className='row my-2 text-capitalize text-center'>
      <div className='col-10 mx-auto col-lg-2'>
        <img src={img} style={{ width: '5rem', height: '5rem' }} className='img-fluid' alt='product'></img>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product:</span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price:</span>
        {price}
      </div>

      <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
        <div className='d-flex justify-content-center'>
          <div className='div-btn' style={{ display: 'flex', gap: '3px' }}>
            <span onClick={() => { decrement(id) }}><button>-</button></span>
            <span><button>{count}</button></span>
            <span onClick={() => { increment(id) }}><button>+</button></span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <div className='remove-icn' style={{ color: 'aqua' }}>
          <i className='fas fa-trash' onClick={() => { removeItem(id) }}></i>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <strong>item Total : ₹ {total}</strong>
      </div>
    </div>
  )
}
