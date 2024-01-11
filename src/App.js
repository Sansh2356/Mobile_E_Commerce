import logo from './logo.svg';
import './App.css';
import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Default from './components/default';
import Product_list from './components/Product_list';
import Details from './components/details';
import Cart from '../src/components/Cart/cart';
import Modal from './components/Modal';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      <div>

        <Navbar />
        <Routes>
          <Route path='/' Component={Product_list}/>
          <Route path='/details' Component={Details}/>
          <Route path='/cart' Component={Cart}/>
          <Route Component={Default}/>
        </Routes>
        <Modal/>

      </div>
    </>
  )
}

export default App;
