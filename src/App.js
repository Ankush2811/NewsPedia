import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/header'
import axios from "axios"
import {NewsContextProvider} from './components/NewsContext'
import News from "./components/News"
import Footer from './components/Footer'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalstyles";
import { lightTheme, darkTheme } from "./components/Theme"
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));    
  
  return (
        <>
         <Route exact path={`/home`} render={ (routerProps) => < News routerProps={routerProps} />} />
          <div className="app">
            <Header/>
                      
          </div>
          
          <div className="App">
          
        <NewsContextProvider>
          <News/>
        </NewsContextProvider>
        
      
    </div>
    <div className="App1">
      <Footer/>
    </div>
    </>
    
  );
}

export default App;
