import './App.css';
import React,{Fragment} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
   <Fragment>
   <Navbar/>
   <Home/>
   <Main/>
   <Footer/>
   </Fragment>
  )
}

export default App
