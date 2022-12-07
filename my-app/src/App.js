import './App.css';
import React,{Fragment} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

const App = () => {
  return (
   <Fragment>
   <Navbar/>
   <Home/>
   <Main/>
   </Fragment>
  )
}

export default App
