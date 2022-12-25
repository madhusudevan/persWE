import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Newsletter.css'
function Newsletter() {
  return (
    <div className='container-fluid '>
        
        <h3>Subscribe</h3>
        <Form className='form'>
    <Form.Group className="mb-0 " controlId="formBasicEmail">
      <Form.Control type="email"  placeholder="Enter email" />
    </Form.Group>
    <Button className='btn' variant="primary" type="submit">
      Subscribe
    </Button>
  </Form>
        </div>
        

  )
}

export default Newsletter