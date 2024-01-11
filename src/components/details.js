import React from "react";
import { ProductConsumer } from "./Context";
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'

export default function details() {
  return (
    <>
      <ProductConsumer>
        {
          (value) => {
            const { id, company, img, info, price, title, inCart } = value.detailProduct;
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 ">
                    <img src={img} className="img-fluid" alt="product"></img>
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h1>model:{title}</h1>
                    <h3 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Made By : <span className="text-uppercase">
                        {company}
                      </span>
                    </h3>
                    <h3 className="text-blue">
                      <strong>
                        price : <span>₹</span>
                        {price}
                      </strong>
                    </h3>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about product:
                    </p>
                    <p className="text-muted lead">
                      {info}
                    </p>
                    <div className="btn-class">
                      <Link to='/'>
                        <ButtonContainer>
                          Back To Product
                        </ButtonContainer>
                      </Link>
                      <ButtonContainer
                        disabled={inCart ? true : false}
                        onClick={() => {
                           value.addToCart(id) ;
                           value.openModal(id);
                        }}
                        cart
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
      </ProductConsumer>
    </>
  )
}