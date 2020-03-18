import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { default as reducers } from './../ducks/reducers';
import { default as sagas } from './../ducks/sagas';

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware, thunkMiddleware];

// Enable errors when attempting to mutate state
// if (!_PROD_) {
if (true) {
    middlewares = [
        require('redux-immutable-state-invariant').default(),
        ...middlewares
    ];
}

// Enable devTools Chrome extension
const composer =
    // (_DEVTOOLS_ && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) || compose;
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const enhancer = composer(applyMiddleware(...middlewares));

export default function configureStore(initialState) {
    const store = createStore(reducers, initialState, enhancer);

    // HMR
    if (module.hot) {
        module.hot.accept('./../ducks/reducers', () => {
            const nextRootReducer = require('./../ducks/reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    Object.values(sagas).forEach(saga => {
        return sagaMiddleware.run(saga);
    });

    return store;
}
