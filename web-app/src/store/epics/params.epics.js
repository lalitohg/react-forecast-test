import { of } from 'rxjs';
import { flatMap, map, withLatestFrom, catchError } from 'rxjs/operators';
import { ofType} from "redux-observable";
import { actions } from '../actions';
import { getForecast } from '../../api';

export const updateZipcode = (action$, state$) => action$.pipe(
    ofType(actions.params.UPDATE_ZIPCODE),
    withLatestFrom(state$),
    flatMap(([, state]) => getForecast(state.params.zipcode, state.params.days)),
    map(forecastItems => actions.display.forecastItemsUpdated(forecastItems)),
    catchError(error => {
        console.log(error);
        return of({type: 'error'})
    })
);

export const updateDays = (action$, state$) => action$.pipe(
    ofType(actions.params.UPDATE_DAYS),
    withLatestFrom(state$),
    flatMap(([, state]) => getForecast(state.params.zipcode, state.params.days)),
    map(forecastItems => actions.display.forecastItemsUpdated(forecastItems)),
    catchError(error => {
        console.log(error);
        return of({type: 'error'})
    })
);
