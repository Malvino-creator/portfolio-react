import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/home';
import Footer from "./Components/footer";



function App() {
  return (
    <div className="App">
      <Navbar />
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
