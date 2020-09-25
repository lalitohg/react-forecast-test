import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './index.css';
import storm from './storm.svg';

export default function Header() {
    return (
        <header className="app-header">
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="center">
                <Grid item>
                    <a alt="AccuWeather" href="http://www.accuweather.com/"><img alt="" src={storm} width="24" height="24"></img></a>
                </Grid>
                <Grid item>
                    <Hidden xsDown>
                        <Typography>Forecasting Dummy App</Typography>
                    </Hidden>
                </Grid>
            </Grid>
        </header>
    );
}
