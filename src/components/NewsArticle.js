import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      marginBottom: '30px',
      backgroundColor: 'e6e6e6'
      

    },
    image: {
      width: 180,
      height: 180,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      borderRadius: '10px'
      
    },
    
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
                <Typography gutterBottom variant="subtitle1" style={{fontWeight: '700'}}>
                  {data.title}
                </Typography>
                <Typography variant="body2" gutterbottom>
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
                <Button variant="contained" color="primary" href={data.url}>
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

