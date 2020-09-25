import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './index.css';

export default function ForecastParams() {
    return (
        <form noValidate autoComplete="off" className="forecast-params">
            <Grid container justify="center" spacing={2}>
                <Grid item><TextField id="zipcode" label="Zip Code" /></Grid>
                <Grid item>
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
