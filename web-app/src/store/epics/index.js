import { combineEpics } from 'redux-observable';
import * as paramsEpics from './params.epics';

export const rootEpic = combineEpics(
    paramsEpics.updateZipcode
);
