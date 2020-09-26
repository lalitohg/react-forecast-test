import { switchMap, flatMap, map, withLatestFrom } from 'rxjs/operators';
import { ofType} from "redux-observable";
import { actions } from '../actions';
import { getForecast } from '../../api';

export const updateZipcode = (action$, state$) => action$.pipe(
    ofType(actions.params.UPDATE_ZIPCODE),
    withLatestFrom(state$),
    flatMap(([, state]) => getForecast(state.params.updateZipcode, state.params.days)),
    map(forecastItems => actions.display.forecastItemsUpdated(forecastItems))
);

export const updateDays = (action$, state$) => action$.pipe(
    ofType(actions.params.UPDATE_DAYS),
    withLatestFrom(state$),
    flatMap(([, state]) => getForecast(state.params.updateZipcode, state.params.days)),
    map(forecastItems => actions.display.forecastItemsUpdated(forecastItems))
);
