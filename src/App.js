import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path='/videos' element={<Video />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
