import { combineReducers } from 'redux';
import vasts from './vasts/reducers';

const reducers = combineReducers({
    vasts
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;
