import React from 'react'
import './App.css';
import Header from './components/header'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, light as LightTheme, dark as DarkTheme } from "./styles";
import axios from "axios"
import {NewsContextProvider} from './components/NewsContext'
import News from "./components/News"
import Footer from './components/Footer'

function App() {
  
  return (
    <div className="App">
      
        <Header/>
        <NewsContextProvider>
          <News/>
        </NewsContextProvider>
        <Footer/>
      
    </div>
    
    
  );
}

export default App;
