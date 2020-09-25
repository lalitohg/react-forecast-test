import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherIcon from '../WeatherIcon';

export default function ForecastItem(props) {
    return (
        <Card>
            <CardContent>
                <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={2}>
                    <Grid item><Typography align="center" variant="h4">{props.date}</Typography></Grid>
                    <Grid item>
                        <Grid container direction="row" justify="space-between" alignItems="stretch">
                            <Grid item>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item><Typography>Min: {props.min} °{props.unit}</Typography></Grid>
                                    <Grid item><Typography>Max: {props.max} °{props.unit}</Typography></Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction="row" justify="space-around" alignItems="center">
                                    <Grid item><WeatherIcon icon={props.dayIcon} /></Grid>
                                    <Grid item><WeatherIcon icon={props.nightIcon} /></Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
