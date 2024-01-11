import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ButtonContainer } from "./Button"
import logo from '../images/navbar_logo.png'

export default function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5" style={{ backgroundColor: "orange" }}>
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" style={{ width: 35, alignItems: "center" }}></img>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5" style={{ color: "orange" }}>
            <span style={{ color: "black" }}><Link to='/' className="nav-link" style={{color:'green',fontWeight:'bold',}}>Products</Link></span>
          </li>
        </ul>
        <Link to='/cart' className="ml-auto">
          <ButtonContainer>
            <span style={{ margin: 5 }}><i className="fas fa-cart-plus" /></span>
            my cart
          </ButtonContainer>
        </Link>
      </nav>
    </>
  )
}