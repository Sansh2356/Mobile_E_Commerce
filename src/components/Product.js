import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ProductConsumer } from './Context'



export default function Product(props) {
  const ProductWrapper = styled.div`
  .card{
    transition:all 0.1s linear;
  }
  .card-footer{
    background:transparent;
    border-top:transparent;
  }
  &:hover{
    .card{
      border:0.24rem solid blue;
      box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2)
    }
    .card-footer{
      background:orange;
    }
  }
  .img-container{
    position:relative;
    overflow:hidden;
  }
  .cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    border:none;
    color:var(--mainWhite);
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
  }
  .img-container:hover .cart-btn{
    transform:translate(0,0);
  }
  .cart-btn:hover{
    color:var(--mainBlue);
    background:black;
    cursor:pointer;
  }

  `
  const { id, title, img, price, inCart } = props.product;
  // const handleClick = () => {
  //   console.log('Added to the cart')
  // }

  return (
    <>
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick={() => {
            props.handelDetail(id)
          }}>
            <Link to='/details'>
              <img src={img} alt="product" className="card-img-top"></img>
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
              props.addToCart(id);
              props.openModal(id);
            }}>
              {inCart ? <p className="text-capitalize mb-0" disabled>Incart</p> : <i className="fas fa-cart-plus" />}
            </button>

          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">₹</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    </>
  )
}