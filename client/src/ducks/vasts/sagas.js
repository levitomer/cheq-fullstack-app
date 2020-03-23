import * as types from './types';
import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from 'routes/vasts';

function* fetchVasts() {
    try {
        const response = yield call(api.fetchVasts);
        yield put({ type: types.FETCH_VAST_SUCCESS, payload: response.data });
    } catch (err) {
        yield put({ type: types.FETCH_VAST_FAILURE, err });
    }
}

function* createVast() {
    try {
        const response = yield call(api.createVast, payload);
        yield put({ type: types.CREATE_VAST_SUCCESS, payload: response.data });
    } catch (err) {
        yield put({ type: types.CREATE_VAST_FAILURE, err });
    }
}

function* editVast({ payload }) {
    try {
        yield call(api.editVast, payload);
        yield put({ type: types.EDIT_VAST_SUCCESS, payload });
    } catch (err) {
        console.log(err);
        yield put({ type: types.EDIT_VAST_FAILURE });
    }
}

function* fetchVastById({ id }) {
    try {
        const response = yield call(api.fetchVastById, id);
        yield put({
            type: types.FETCH_VAST_BY_ID_SUCCESS,
            payload: response
        });
    } catch (err) {
        yield put({ type: types.FETCH_VAST_BY_ID_FAILURE, payload: err });
    }
}

function* vastsSaga() {
    yield takeLatest(types.FETCH_VAST_REQUEST, fetchVasts);
    yield takeLatest(types.FETCH_VAST_BY_ID_REQUEST, fetchVastById);
    yield takeLatest(types.CREATE_VAST_REQUEST, createVast);
    yield takeLatest(types.EDIT_VAST_REQUEST, editVast);
}

export default vastsSaga;
