import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Newsletter.css'
import { useState } from 'react';
import axios from 'axios'
function Newsletter() {
  const [email,setEmail]=useState(''); 

  async function postEmail(e){
    e.preventDefault()

    try {
      await axios.post("http://localhost:4000/post_email",{
        email
      })
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className='container-fluid '>
        <div className='sub'>
        <h3>Subscribe</h3>
        <Form onSubmit={postEmail} className='form'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange = {(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='btn'>
        Submit
      </Button>
        </Form>
        </div>
        </div>
  )
  setEmail("")
}

export default Newsletter