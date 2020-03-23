import { combineReducers } from 'redux';
import vasts from './vasts/reducers';
import modal from './modal/reducers';
import form from './form/reducers';

const reducers = combineReducers({
    vasts,
    modal,
    form
});

const rootReducer = (state, action) => {
    return reducers(state, action);
};

export default rootReducer;
