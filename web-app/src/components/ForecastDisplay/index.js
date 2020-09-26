import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ForecastItem from '../ForecastItem';
import loader from './loader.svg';
import './index.css';

export default function ForecastDisplay() {
    const showLoader = useSelector(state => state.display.loading);
    const forecastItems = useSelector(state => state.display.forecastItems);
    return (
        <Box className="forecast-display">
            {showLoader && <Box style={{ textAlign: 'center' }}><img alt='' src={loader}></img></Box>}
            {!forecastItems.length ?
                <Box style={{ textAlign: 'center' }}><Typography variant="h2">No data to display</Typography></Box> :
                <Container>
                    <Grid container justify="space-between" spacing={2}>
                        {forecastItems.map(item =>
                            <Grid key={item.Date} item>
                                <ForecastItem
                                    date={new Date(item.Date).toString().substr(0, 10)}
                                    min={item.Temperature.Minimum.Value}
                                    max={item.Temperature.Maximum.Value}
                                    dayIcon={item.Day.Icon}
                                    nightIcon={item.Night.Icon}
                                    unit={item.Temperature.Maximum.Unit}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            }
        </Box>
    );
}
