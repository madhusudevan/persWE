import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
 
  return (
    <div className="container-fluid">

    
<div className="">
    <Navbar  expand="lg" className='header'>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/home"className='nav'>Home</Link>
          <Link to="/timeline"className='nav'>Timeline</Link>
          <Link to="/works"className='nav' >Works</Link>
          {/* <Link to="/blogs" className='nav' >Blogs</Link> */}
          {/* <Link to="/letter"className='nav' >Letter</Link> */}
          <Link to="/about" className='nav' >About</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  </div>
  )
}

export default Header