import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import Footer from "./Components/footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
   <div className='content'>
    <Home />
   </div>
   <div>
    <Footer />
   </div>
    </div>
  );
}

export default App;
