import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ForecastItem from '../ForecastItem';
import './index.css';

export default function ForecastDisplay() {
    return (
        <Box className="forecast-display">
            <Container>
                <Grid container justify="space-between" spacing={2}>
                    <Grid item>
                        <ForecastItem
                            date="Sep 25"
                            min="40"
                            max="40"
                            dayIcon="1"
                            nightIcon="38"
                            unit='F'
                        />
                    </Grid>
                    <Grid item>
                        <ForecastItem
                            date="Sep 25"
                            min="40"
                            max="40"
                            dayIcon="1"
                            nightIcon="38"
                            unit='F'
                        />
                    </Grid>
                    <Grid item>
                        <ForecastItem
                            date="Sep 25"
                            min="40"
                            max="40"
                            dayIcon="1"
                            nightIcon="38"
                            unit='F'
                        />
                    </Grid>
                    <Grid item>
                        <ForecastItem
                            date="Sep 25"
                            min="40"
                            max="40"
                            dayIcon="1"
                            nightIcon="38"
                            unit='F'
                        />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}
