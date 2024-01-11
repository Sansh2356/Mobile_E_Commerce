import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
import cart from "./Cart/cart";
const ProductContext = React.createContext();

//product provider and product consumer
class ProductProvider extends Component {
  //simple state defining for various functionalities
  state = {
    //inital state as empty 
    //filling it with each step in ordere to render it again

    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0

  }

  componentDidMount() {
    this.setProducts();

  }
  /**
   const [products,SetProducts] = React.UseState([])

   SetProducts = (prev)=>{
    return(
      {
        ...prev,
        values:new_values
      }
    )
   }

   */
  openModal = (id) => {
    const product = this.addItem(id);
    this.setState(() => {
      return { modalOpen: true, modalProduct: product }
    })
  }
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false }
    })
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const Singleitem = { ...item };
      //simply copying each item object and
      //spreading it inside the products array//
      products = [...products, Singleitem]
    });
    this.setState(() => {
      return { products };
    })
  }
  //getting item wrt id

  addItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  }

  //accessing details of a product wrt id
  //and function to handle clicking over image

  handelDetail = (id) => {
    const product = this.addItem(id);
    this.setState(() => {
      return { detailProduct: product, cart: [...this.state.cart, product] }
    })

  }
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.addTotals);
  }

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  }

  removeItem = (id) => {
     let tempProducts = [...this.state.products];
     let tempCart = [...this.state.cart];

     const index = tempProducts.indexOf(this.addItem(id));
     let removedProduct = tempProducts[index];
     removedProduct.inCart = false;
     removedProduct.count = 0;
     removedProduct.total = 0;

     tempCart = tempCart.filter(item => {
       return item.id !== id;
     });

     this.setState(() => {
       return {
         cart: [...tempCart],
         products: [...tempProducts]
       };
     }, this.addTotals);

  }

  clearCart = () => {
    // const test = [];
    // const temp = this.state
    // this.state.cart.map(item => {
    //   test.push(item)
    // })
    // test.forEach(element => {
    //   element.count = 0;
    //   element.total = 0;
    //   element.inCart = false;
    // });
    // this.setState(() => {
    //   return {
    //     cart: [],
    //     products: test
    //   }
    // })
    this.setState(() => {
      return { cart: [] }
    }, () => {
      this.setProducts()
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const idx = tempProducts.indexOf(this.addItem(id));
    const product = tempProducts[idx];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] }
    }, this.addTotals())
  }
  addTotals = () => {
    const arr = this.state.cart;
    var tax = 0;
    var sum = 0;
    var total_sum = 0;

    arr.map(item => {
      sum += item.total

    })
    tax += (0.78) * (sum)
    tax = parseFloat(tax.toFixed(2));

    total_sum = parseFloat((tax + sum).toFixed(2));

    this.setState(() => {
      return {
        cartTax: tax,
        cartSubTotal: sum,
        cartTotal: total_sum
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          clearCart: this.clearCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem


        }
      }>
        {this.props.children},

      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };