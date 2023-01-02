import React from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import './Works.css'
function Works() {
  return (
    <div className='container-fluid '> 
     
    <div className=''>
    <h1>Projects</h1>  
    </div>
    

    <div className='row'>


    <div className='col-md-4 p-3'>
      <Card.Link active href="https://github.com/madhusudevan/covid_API.git">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>covid_API</Card.Title>
        <Card.Text>
          API calling project
        </Card.Text>
      </Card.Body>
    </Card>
    </Card.Link>
      </div>


 {/*  */}

<div className='col-md-4 p-3'>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link href="https://github.com/madhusudevan/netflix.git">
        <Card.Title>NetFlix</Card.Title>
        </Card.Link>
        <Card.Text>
        my first project on react
        </Card.Text>
      </Card.Body>
    </Card>
    
      </div>
{/*  */}     
{/*  */}

<div className='col-md-4 p-3'>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link href="https://github.com/madhusudevan/vph_site.git">
        <Card.Title>Shopping Cart</Card.Title>
        </Card.Link>
        <Card.Text>
          This is a working website
        </Card.Text>
      </Card.Body>
    </Card>
    
      </div>
{/*  */}
<div className='col-md-4 p-3'>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link href="https://github.com/madhusudevan/vph_site.git">
        <Card.Title>Static website</Card.Title>
        </Card.Link>
        <Card.Text>
          This is a working website
        </Card.Text>
      </Card.Body>
    </Card>
    
      </div>
      </div>
      </div>
    

  )
}

export default Works