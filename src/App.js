import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Timeline from './Pages/Timeline';
import About from './Pages/About'
import Letter from './Pages/Letter'
import Works from './Pages/Works'
import Header from './Components/Header'
import Footer from './Components/Footer/Footer'
function App() {
   return (
    <div className='container-fluid'>
      
     <Router>
     <Header/>
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route path ='/home' element={<Home/>}/>
        <Route path ='/timeline' element={<Timeline/>}/>
        <Route path ='/about' element={<About props="about" />}/>
        <Route path ='/letter' element={<Letter/>}/>
        <Route path ='/works' element={<Works/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
