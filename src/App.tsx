import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tvshows from './pages/Tvshows';
import Movies from './pages/Movies';
import Latest from './pages/Latest';
import Mylist from './pages/Mylist';
import Browseby from './pages/Browseby';
import Kids from './pages/Kids';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
         <Route path='/home' element={<Home />} />
         <Route path='/tvShows' element={<Tvshows />} />
         <Route path='/movies' element={<Movies />} />
         <Route path='/latest' element={<Latest />} />
         <Route path='/mylist' element={<Mylist />} />
         <Route path='/browseby' element={<Browseby />} />
         <Route path='/kids' element={<Kids />} />
      </Routes>
    </div>
  );
}

export default App;
