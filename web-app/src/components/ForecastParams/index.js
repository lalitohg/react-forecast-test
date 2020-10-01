import React, {useState} from 'react';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { updateZipcode, updateDays } from '../../store/actions/params.actions';
import { updateLoading } from '../../store/actions/display.actions';
import './index.css';

export default function ForecastParams() {
    const [days, setDays] = useState(useSelector(state => state.params.days));
    const dispatch = useDispatch();
    const zipcode$ = new Subject();
    const days$ = new Subject();

    const handleZipcodeChange = e => zipcode$.next(e.target.value);

    const handleDaysChange = e => {
        const newDays = parseInt(e.target.value, 10);
        if (newDays < 1) {
            setDays(1);
            return;
        } else if (newDays > 5) {
            setDays(5);
            return;
        }
        days$.next(newDays);
    };
    
    zipcode$.pipe(
        debounceTime(500)
    ).subscribe(zipcode => {
        dispatch(updateLoading(true))
        dispatch(updateZipcode(zipcode))});

    days$.subscribe(days => {
        setDays(days);
        dispatch(updateDays(days));
    });

    return (
        <form noValidate autoComplete="off" className="forecast-params">
            <Grid container justify="center" spacing={2}>
                <Grid item>
                    <TextField
                        id="zipcode"
                        label="Zip Code"
                        onChange={handleZipcodeChange}
                        />
                </Grid>
                <Grid item>
                    <TextField
                        id="days-number"
                        label="Days Number"
                        type="number"
                        value={days}
                        onChange={handleDaysChange}
                    />
                </Grid>
            </Grid>
        </form>
    );
}
