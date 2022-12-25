import React from 'react'
import Header from '../Components/Header'
import Card from 'react-bootstrap/Card';
import './Works.css'
function Works() {
  return (
    <div className='container-fluid'> 
     
    <div className=''>
    <h1>Projects</h1>  
    </div>
    <div className='row'>


      <div className='col-md-4 p-3'>
      <Card.Link href="https://github.com/madhusudevan/covid_API.git">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>covid_API</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Card.Link>
      </div>

      <div className='col-md-4 p-3'>
      <Card.Link href="https://github.com/madhusudevan/netflix.git">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Netflix</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Card.Link>
      </div>

      <div className='col-md-4 p-3'>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Link href="https://github.com/madhusudevan/vph_site.git">
        <Card.Title>Static website</Card.Title>
        </Card.Link>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
      </div>

      
      <div className='col-md-4 p-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      </div>

      <div className='col-md-4 p-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      
      </div>


      </div>
    </div>

  )
}

export default Works