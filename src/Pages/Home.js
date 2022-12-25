import React from 'react'
import Header from '../Components/Header'
import Profile from '../Components/Profile/Profile'
import Newsletter from '../Components/Newsletter/Newsletter'
import Time from '../Components/Time/Time'

function Home() {
  return (
    <div className='container-flluid'>
         <Profile/>
          <Time/>
          <Newsletter/>
    </div>
  )
}

export default Home