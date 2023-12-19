import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
import AboutUs from './components/about-us/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
