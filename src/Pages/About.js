import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Components/Header'
import './About.css'
import { useState ,useRef } from 'react';
import axios from 'axios'

function About() {
 
  var [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const [message,setMessage] = useState('');

const first = useRef(null);
const second = useRef(null);
const third = useRef(null)


 function handleSubmit(e){
    e.preventDefault()
   
console.log(name,mail,message+'...input')

try{
  axios.post("http://localhost:4000/post_contact",{
   name,mail,message
   
  }).then((res,err)=>{
    if(err){
      alert("err")
    }else{
      alert('Contact Saved Successfully')
    
    }

  })
 
  first.current.value = ''
  second.current.value=''
  third.current.value=''

  
  
}catch (error){
  console.log(error)
}


  }
  
  return (
    <div className='container-fluid'id='form-wrap'>
      
        <h1>About</h1>
        <p>Hi, my name is Surya,  I'm a designer, developer, and a student.<br/>
        I want to learn New technologies and improve developer experience.<br/>
         </p>

         <h1>Contact</h1>
    <form className='about'>
  
  <div className="form-group row">
    {/* <label for="inputPassword" className="col-sm-2 col-form-label">Name</label> */}
    <div className="col-sm-10">
      <input  ref={first} type="text" className="form-control" id="inputPassword" placeholder="Name" require onChange = {(e)=>setName(e.target.value)}/>
    </div>
  </div>

  <div className="form-group row">
    {/* <label for="inputPassword" className="col-sm-2 col-form-label">Email</label> */}
    <div className="col-sm-10">
      <input require ref={second}type="email" className="form-control" id="inputPassword" placeholder="Email"onChange = {(e)=>setMail(e.target.value)}  />
    </div>
  </div>

  <div className="form-group row">
    {/* <label for="exampleFormControlTextarea1">Message</label> */}
    <div className="col-sm-10">
    <textarea ref={third} require className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"onChange = {(e)=>setMessage(e.target.value)} />
    </div>
  </div>
  
      <button type="submit" className="btn btn-info"onClick={handleSubmit}>Send</button>
</form>


{/* <form action="/action_page.php" class="was-validated">
    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Username:</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="mb-3">
      <label for="pwd" class="form-label">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>

    <div class="mb-3 mt-3">
      <label for="uname" class="form-label">Username:</label>
      <textarea rows="3" id="uname"class="form-control"/>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-check mb-3">
      <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required/>
      <label class="form-check-label" for="myCheck">I agree on blabla.</label>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Check this checkbox to continue.</div>
    </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
         */}
    </div>
    
  )
 
}

export default About