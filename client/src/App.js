import './App.css';
import Retrieve from './components/Retrieve'
import Navigation from './components/Navigation'
import Registration from './components/Registration';
import NotFound from './components/NotFound'
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/retrieve" element={<Retrieve/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}


function Home(){
  return(
    <h1>Home page</h1>
  )
}


export default App;
