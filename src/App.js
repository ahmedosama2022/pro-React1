import React, {useState, useEffect} from 'react';
import './App.css';

import './Home';
import './About';
import './Broperties';
import Broperties from './Broperties';
import NavBar from './NavBar';
import MoonLoader from "react-spinners/MoonLoader"
import Home from './Home';
import About from './About';
import {BrowserRouter, Route, Router, Routes, Link, NavLink} from 'react-router-dom';
import Agents from './Agents';
import Blog from './Blog';
import Contact from './Contact';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])
  
  return (

    <BrowserRouter>
      
      {loading ?
        <div className="preloaderr">
          <MoonLoader  color={' rgb(44, 83, 8)'} loading={loading} height={100} margin={10} size={138}speedMultiplier={16} />
        </div> :
        <>
          <NavBar />
         
          <Routes>
          <Route path='/Home' element = {<Home />}/>
         <Route path='/About' element = {<About />}/>
         <Route path='/Broperties' element = {<Broperties />}/>
         <Route path='/Agents' element = {<Agents />}/>
         <Route path='/Blog' element = {<Blog />}/>
         <Route path='/Contact' element = {<Contact />}/>
 
          </Routes>
        </>
      }
    </BrowserRouter>
  );
}

export default App;
