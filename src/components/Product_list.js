import React from "react";
import Product from './Product'
import { ProductConsumer } from "./Context";
import Title from "./Title";
export default function Product_list() {

  // const [products,SetProducts] = React.useState(storeProducts)
  // console.log(products)
  return (
    <>

      <div className="py-5">
        <div className="container">
          <div className="row">
            <Title name="our" title="products" />

            <ProductConsumer>
              {
                (value) => {
                  return (
                    value.products.map(product => {
                      return (
                        <Product key={product.id} product={product} addToCart={value.addToCart} handelDetail={value.handelDetail}
                          openModal={value.openModal}
                        />
                      )
                    })
                  )
                }
              }
            </ProductConsumer>
          </div>
        </div>
      </div>

    </>
  )
}