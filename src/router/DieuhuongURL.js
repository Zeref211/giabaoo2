import React, { Component } from 'react';
import {   BrowserRouter as Router,     Route, Link, Routes, BrowserRouter  } from "react-router-dom";
import News from '../Components/News';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import NewsDetail from '../Components/NewsDetail';

class DieuhuongURL extends Component {
    render() {
        return (
          <BrowserRouter>
              <Routes>
                <Route exact path="/News"element={  <News/>}>
                </Route>
                <Route path="/" element={ <Home />}>
                </Route>
                
                <Route path="/abouts" element={ <NewsDetail/>}>
                </Route>
                <Route path="/contact" element={ <Contact/>}>
                </Route>
              
            
          </Routes>
          </BrowserRouter>
        
        );
    }
}

export default DieuhuongURL;