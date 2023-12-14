import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
