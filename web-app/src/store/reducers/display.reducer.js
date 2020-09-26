
import * as displayActions from '../actions/display.actions';

const initialState = {
    loading: false,
    forecastItems: []
};

export default function displayReducer(state = initialState, action) {
    const { type, payload } = action;
    let newState;

    switch (type) {
        case displayActions.FORECAST_ITEMS_UPDATED:
            newState = {
                ...state,
                loading: false,
                forecastItems: payload
            };
            break;
        case displayActions.UPDATE_LOADING:
            newState = {...state, loading: payload}
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
}
