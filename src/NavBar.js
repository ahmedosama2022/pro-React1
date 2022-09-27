import React from 'react'
import './App.css';


import Navbar,  { useRef, useState }from 'react-bootstrap/Navbar';


import {BrowserRouter, Route, Router, Routes, Link, NavLink} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>  <Navbar className='navv'  expand="lg" bg="dark" variant="dark">
    <Container>
  <Navbar.Brand  style={{fontsize: '80px',color:' rgb(94, 165, 29)' ,fontweight: '500'}} ><h1>Oakberry</h1></Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav" style={{color:'black'}}>
      <Nav className="me-auto">
         <Link class="nav-link active"to="/Home" style={{color:'white'}}>Home</Link>
         <Link class="nav-link" to="/About" style={{color:'white'}}>About</Link>
         <Link class="nav-link" to="/Broperties" style={{color:'white'}}>Broperties</Link>
         <Link class="nav-link "to="/Agents" style={{color:'white'}}>Agents</Link>
         <Link class="nav-link "to="/Blog" style={{color:'white'}}>Blog</Link>
         <Link class="nav-link "to="/Contact" style={{color:'white'}}>Contact</Link>
         <button>Submit A Property</button>
       </Nav>
      </Navbar.Collapse>
      </Container>
 </Navbar></div>
  )
}

export default NavBar