import  React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup';
import styles from './cards.module.css'
import cx from 'classnames'
 const Cards = ({data: {active,active_rate,confirmed,death,death_rate,lastUpdate} }) => {
     if(!active){
         return 'Loading...'
     }
     var d = new Date();
    var n = d.toDateString();
    return (
        <div className={styles.container}>
           <Grid container spacing={3} justify="center">

           <Grid item component={Card}xs={12} md={3} className={cx(styles.card,styles.recovered)} >
           <CardContent>
           <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
           <Typography variant="h5"><CountUp start={0} end={confirmed}  duration={2.5} separator=","/></Typography>
           <Typography color="textSecondary">{n}</Typography>
           <Typography variant="body2">Number of confirmed cases of  COVID-19 </Typography>
           </CardContent>
           </Grid>
           
           <Grid item  xs={12} md={3} component={Card} className={cx(styles.card, styles.active)}>
           <CardContent>
           <Typography color="textSecondary" gutterBottom>Active</Typography>
            <Typography variant="h5"><CountUp start={0} end={active}  duration={2.5} separator=","/>
           </Typography>
           <Typography color="textSecondary">{n}</Typography>
           <Typography variant="body2">Number of active cases of COVID-19</Typography>
           <Typography variant="body2">{active_rate}</Typography>
           <Typography variant="body2">Active Rate</Typography>
           </CardContent>
           </Grid>


           <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
           <CardContent>
           <Typography color="textSecondary" gutterBottom>Deaths</Typography>
           <Typography variant="h5"><CountUp start={0} end={death}  duration={2.5} separator=","/></Typography>
           <Typography color="textSecondary">{n}</Typography>
           <Typography variant="body2">Number of deaths by COVID-19</Typography>
           <Typography variant="body2">{death_rate} </Typography>
           <Typography variant="body2">Mortality Rate </Typography>
           </CardContent>
           </Grid>
           </Grid>
       </div>
    )
    }
export default Cards