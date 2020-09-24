import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeIsCreated = false;

export function getStore() {
    let store;
    if (!storeIsCreated) {
        store = createStore(
          rootReducer,
          composeEnhancers(
              applyMiddleware(epicMiddleware)
          )
        );
      
        epicMiddleware.run(rootEpic);
        storeIsCreated = true;
    }

  return store;
}
