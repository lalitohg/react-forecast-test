import * as paramsActions from '../actions/params.actions';

const initialState = {
    zipcode: '',
    days: 5
};

export default function paramsReducer(state = initialState, action) {
    const { type, payload } = action;
    let newState;

    switch (type) {
        case paramsActions.UPDATE_ZIPCODE:
            newState = {...state, zipcode: payload};
            break;
        case paramsActions.UPDATE_DAYS:
            newState = {...state, days: payload};
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
}
