
import React, { useContext ,useState} from "react";
import styled, { ThemeContext } from "styled-components";
import './header.css'
import category from './category'
import { ListItem } from "@material-ui/core";
import {List} from "@material-ui/core";
import NewsContext from './NewsContext'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalstyles";
import { lightTheme, darkTheme } from "./Theme"
import Toggle from './toggle'


/*const list=({setCategory}) =>{
    <div>
        <List>
            <ListItem>Categories</ListItem>
        </List>
        <List>
        {category.map((text,index)=>(
            <ListItem button onClick={() => setCategory(text)}
            key={text}></ListItem>
        ))}
        </List>
    </div>
}
*/
function Header() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
     theme === 'light' ? setTheme('dark') : setTheme('light')
   } 
   

    
    return(
        
        
        <div className="Toolbar">
            <h1>NewsPedia</h1>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        
            <GlobalStyles/>
            <>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            </>
            
        
        
        </ThemeProvider>
        </div>
    )
}
export default Header;