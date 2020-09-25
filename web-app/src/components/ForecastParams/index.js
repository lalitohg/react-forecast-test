import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './index.css';

export default function ForecastParams() {
    return (
        <form noValidate autoComplete="off" className="forecast-params">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField id="zipcode" label="Zip Code" /></Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="days-number"
                        label="Days Number"
                        type="number"
                    />
                </Grid>
            </Grid>
        </form>
    );
}
