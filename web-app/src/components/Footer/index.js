import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import accuweatherlogo from './accuweatherlogo.png';
import './index.css';

export default function Footer() {
    return (
        <footer className="app-footer">
            <Grid
                container
                direction="row"
                >
                <Grid item xs={6}>
                    <a href="http://www.accuweather.com/">
                        <img alt="" src={accuweatherlogo} width="24" height="24"></img>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="caption" component="div" align="right">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></Typography>
                </Grid>
            </Grid>
            
        </footer>
    );
}
