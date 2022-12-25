import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Components/Header'
import './About.css'
function About() {
  return (
    <div className='container-fluid'id='form-wrap'>
      
        <h1>About Mee..</h1>
        <p>gryfdgfdhgdgfgdgdgdgygvddy</p>
        
        <Form className=''>
    
      <Form.Group className=" about mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="name" />
      </Form.Group>

      <Form.Group className=" about mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">    
        </Form.Text>
      </Form.Group>

      <Form.Group className=" mb-3" controlId="formBasicPassword">
        <textarea type="textarea" placeholder="message" />
      </Form.Group>
     

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
        
    </div>
  )
}

export default About