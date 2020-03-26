import { createReducer } from 'utils';
import * as types from './types';

const initialState = {
    error: false
};

const handlers = {
    [types.INVALID_FORM]: state => {
        return {
            ...state,
            error: true
        };
    },
    [types.RESET_FORM]: state => {
        return { ...initialState };
    }
};

export default createReducer(initialState, handlers);
