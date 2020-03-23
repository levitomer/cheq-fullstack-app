import { combineReducers } from 'redux';
import vasts from './vasts/reducers';
import modal from './modal/reducers';

const reducers = combineReducers({
    vasts,
    modal
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;
