import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <About />
    </>
  );
}

export default App;
