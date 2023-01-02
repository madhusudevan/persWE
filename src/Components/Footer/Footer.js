import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
function Footer() {
  return (
    <div className='container-fluid p-3'>
       
       <Navbar bg="light" variant="light" className='footer-nav'>
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/madhusudevan-k">LinkedIn</Nav.Link>
            <Nav.Link href="madhukjkd@gmail.com">E-mail</Nav.Link>
            <Nav.Link href="https://github.com/madhusudevan">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Footer