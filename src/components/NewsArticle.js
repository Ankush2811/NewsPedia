import React, { useState } from "react";
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import classes from './NewsArticle.module.css';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      marginBottom: '30px',
      backgroundColor: '#fff',
      boxShadow:' 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);',
      borderRadius:'4px'

    },
    image: {
      width: 180,
      height: 180,
    },
    img: {
      margin: 'auto',
      display: 'block',
      
      height:'180px',
      width:'180px',
      objectFit:'cover'
    },
    
    '@media (maxWidth: 499px)': {
    
      root:{
        flexGrow:1,
          alignItems:'center',
          justifyContent:'center'

  
      }
      
  }
    
  }));
  
export default function NewsArticle({ data }) {
    const classes = useStyles()
  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid className={classes.Grid1} container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={data.urlToImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle1" style={{fontWeight: '700'}}>
                  {data.title}
                </Typography>
                <Typography variant="body2" >
                  {data.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.publishedAt}
                  
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.source.name}
                  
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                <Button variant="contained" style={{ backgroundColor:'#F50057',color:'white'}} href={data.url}>
                    Read More
                </Button>
                  
                </Typography>
              </Grid>
            </Grid>
        </Grid>
        </Grid>
        </Paper>

    </div>
    
  );
}

