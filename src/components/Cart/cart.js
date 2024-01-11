import React from "react";
import Title from '../Title'
import CartColumns from './CartColumns'
import Empty_cart from "./Empty_cart";
import Cart_Totals from './Cart_Totals'
import Cart_list from "./Cart_list";
import { ProductConsumer } from "../Context";

export default function cart() {
  return (
    <>

      <header>
        <ProductConsumer>
          {
            (value) => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <>
                    <Title name="your" title="cart"></Title>
                    <br></br>
                    <CartColumns />
                    <Cart_list value= {value}/>
                    <Cart_Totals value = {value}/>
                  </>
                )
              }
              else {
                return (
                  <>
                    <Empty_cart></Empty_cart>
                  </>
                )
              }
            }
          }

        </ProductConsumer>
      </header>



    </>
  )
}