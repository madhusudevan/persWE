import React from 'react'
import './Profile.css'
function Profile(props) {
  return (
    <div className='container-fluid p-5'>
    
       
         
  <img style={{height:160,width:160}} className='rounded-full' src={require('../../Images/IMG_20221224_144727.jpg')}/>
           
       
 
    <h1>Surya</h1>
    <span>Mern Stack developer & Student</span>
      
      
      </div>   
   

  )
}

export default Profile