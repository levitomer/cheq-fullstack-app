import { createReducer } from '../../utils';
import * as types from './types';

const initialState = {
    loading: false,
    error: null,
    data: null
};

const handlers = {
    // FETCH VASTS HANDLERS
    [types.FETCH_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.FETCH_VAST_SUCCESS]: (state, payload) => {
        return { ...state, vasts: payload, loading: false };
    },
    [types.FETCH_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    },

    // CREATE VAST HANDLERS
    [types.CREATE_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.CREATE_VAST_SUCCESS]: (state, payload) => {
        return { ...state, vasts: { ...state.vasts, payload }, loading: false };
    },
    [types.CREATE_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    },

    // EDIT VAST HANDLERS
    [types.EDIT_VAST_REQUEST]: state => {
        return { ...state, loading: true };
    },
    [types.EDIT_VAST_SUCCESS]: (state, payload) => {
        return { ...state, vasts: payload, loading: false };
    },
    [types.EDIT_VAST_FAILURE]: (state, payload) => {
        return { ...state, error: payload, loading: false };
    }
};

export default createReducer(initialState, handlers);
