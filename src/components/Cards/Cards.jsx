import React from 'react';
import {Card ,  CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);
    return (
      <div className={styles.container}>
          <Grid container spacing = {3} justify = "center">
              <Grid item compenent ={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom> Infected</Typography>
                    <Typography variant = "h5">Real DATA</Typography>
                    <Typography colr ="textSecondary">REAL DATE</Typography>
                    <Typography variant = "body2">Number of active cases of Covid 19 cases</Typography>
                  </CardContent>
              </Grid>
              <Grid item compenent ={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                    <Typography variant = "h5">Real DATA</Typography>
                    <Typography colr ="textSecondary">REAL DATE</Typography>
                    <Typography variant = "body2">Number of recoveries from Covid 19 cases</Typography>
                  </CardContent>
              </Grid>
              <Grid item compenent ={Card}>
                  <CardContent>
                      <Typography color="textSecondary" gutterBottom> Deaths</Typography>
                    <Typography variant = "h5">Real DATA</Typography>
                    <Typography colr ="textSecondary">REAL DATE</Typography>
                    <Typography variant = "body2">Number of deaths due Covid 19 cases</Typography>
                  </CardContent>
              </Grid>

          </Grid>
      </div>
    )
}

export default Cards;