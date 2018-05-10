import { ActionType } from '../../constants/types';
import {
   INCREMENT_COUNTER, SWITCH_LANGUAGE, SAVE_USER_INFO , SAVE_USER_INFO_INFLIGHT, SAVE_USER_INFO_SUCCESSFUL,
    SAVE_USER_INFO_ERROR,TOGGLE_RIGHT_SIDEBAR, FETCH_ALL_USER_INFO, FETCH_ALL_USER_INFO_INFLIGHT,
    FETCH_ALL_USER_INFO_SUCCESSFUL, FETCH_ALL_USER_INFO_ERROR
} from './constants';

import { LocaleEnum } from '../../constants/enums';

export function switchLanguage(payload: LocaleEnum): ActionType<LocaleEnum> {
  return {
    payload,
    type: SWITCH_LANGUAGE
  };
}
export function incrementCounter() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function toggleRightSidebar() {
    return {
        type: TOGGLE_RIGHT_SIDEBAR
    };
}
// SAVE USER INFO

export function saveUserInfo(data: object) {
    return {
        type: SAVE_USER_INFO,
        data
    };
}
export function saveUserInfoProgress() {
    return {
        type: SAVE_USER_INFO_INFLIGHT
    };
}

export function saveUserInfoSuccessful(payload: string) {
    return {
        payload,
        type: SAVE_USER_INFO_SUCCESSFUL
    };
}

export function saveUserInfoFailed() {
    return {
        type: SAVE_USER_INFO_ERROR
    };
}

// END THE SAVE USER INFO SECTION

// GET USER INFO

export function fetchAllUsersInfo() {
    return {
        type: FETCH_ALL_USER_INFO
    };
}
export function fetchAllUsersInfoProgress() {
    return {
        type: FETCH_ALL_USER_INFO_INFLIGHT
    };
}

export function fetchAllUsersInfoSuccessful(payload: string) {
    return {
        payload,
        type: FETCH_ALL_USER_INFO_SUCCESSFUL
    };
}

export function fetchAllUsersInfoFailed() {
    return {
        type: FETCH_ALL_USER_INFO_ERROR
    };
}

// END THE GET USER INFO SECTION
