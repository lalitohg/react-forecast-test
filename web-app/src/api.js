import { map } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

const URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day';
const accuWeatherAppKey = 'JlhMcyABFv2LGFxIAxJaUGfjZEmqwcql'; // something to NEVER, EVER do in prod! Using the key here just for demo

export const getForecast = (zipcode, days) => ajax
    .getJSON(`${URL}/${zipcode}?apikey=${accuWeatherAppKey}`)
    .pipe(
        map(response => response.DailyForecasts.slice(0, days))
    );
