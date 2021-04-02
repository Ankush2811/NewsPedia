import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './Search.css';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }
  const useStyles = makeStyles((theme) => ({
    TextField: {
      border:'#F50057',
      marginRight:'10px' 
    },
    input:{
      color:'#F50057'
    },
    Button:{
      backgroundColor:'#F50057',
      height:'38px'

    },
    
    
  }));

  const classes = useStyles()
  return (
    <div className="main1" style={{ display: "flex", justifyContent: "center", paddingBottom: "35px", flexDirection:"row"}}>
    
      <form className="f1">
        
        <TextField className={classes.TextField} id="outlined-basic" label="Search News" variant="outlined" size="small" style={{marginBottom:'10px'}}
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          inputProps={{className:classes.input}}
        />
        
        <Button className={classes.Button} onClick={callSearchFunction} size="medium" variant="contained" type="submit" color="primary">
              Search
        </Button>
        
        </form>
      </div>
    );
}

export default Search;