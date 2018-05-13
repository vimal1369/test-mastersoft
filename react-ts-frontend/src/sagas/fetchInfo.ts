import { call, put, takeLatest } from 'redux-saga/effects';

import {
  saveUserInfoProgress,
  saveUserInfoSuccessful,
  saveUserInfoFailed,
  fetchAllUsersInfoProgress,
  fetchAllUsersInfoSuccessful,
  fetchAllUsersInfoFailed

} from '../redux/app/actions';
// tslint:disable-next-line:max-line-length
import { SAVE_USER_INFO, FETCH_ALL_USER_INFO } from '../redux/app/constants';
import API from '../api';

export function* saveUserInfo(action: any): {} {
    try {
        // console.log(action.data);
        yield put(saveUserInfoProgress());
        let data: any = action.data;
        const result = yield call( API.saveUserInfo, data );
        yield put(saveUserInfoSuccessful(result.data));
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
        yield put(saveUserInfoFailed());
    }
}

export function* fetchAllUsersInfo(action: any): {} {
    try {
        // console.log(action.data);
        yield put(fetchAllUsersInfoProgress());
        const result = yield call( API.getUsersInfo);
        yield put(fetchAllUsersInfoSuccessful(result.data.users));
    } catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
        yield put(fetchAllUsersInfoFailed());
    }
}

export function* saveUserInfoWatcher() {
    yield takeLatest(SAVE_USER_INFO, saveUserInfo);
}

export function* fetchAllUsersInfoWatcher() {
    yield takeLatest(FETCH_ALL_USER_INFO, fetchAllUsersInfo);
}