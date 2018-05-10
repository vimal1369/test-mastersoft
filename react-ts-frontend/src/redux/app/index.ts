import * as Immutable from 'seamless-immutable';
import { ActionType, AppStateType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';
// tslint:disable-next-line:max-line-length
import {
  INCREMENT_COUNTER,
  SWITCH_LANGUAGE,
  TOGGLE_RIGHT_SIDEBAR,
  SAVE_USER_INFO, SAVE_USER_INFO_INFLIGHT,
  SAVE_USER_INFO_SUCCESSFUL, SAVE_USER_INFO_ERROR,
  FETCH_ALL_USER_INFO, FETCH_ALL_USER_INFO_INFLIGHT,
  FETCH_ALL_USER_INFO_SUCCESSFUL, FETCH_ALL_USER_INFO_ERROR
} from './constants';
// tslint:disable-next-line:max-line-length
const istate: AppStateType = {
  counter: 0,
  error: undefined,
  loading: false,
  locale: LocaleEnum.en,
  payload: {},
  rightSidebarVisible: false,
  userInfoAfterSubmit: {},
  allUsersInfo: {}
};

export const initialState = Immutable.from(istate);

const appReducer = (state = initialState, action: ActionType<{}>): AppStateType => {
  switch (action.type) {

    case SWITCH_LANGUAGE:
      return state
        .set('locale', action.payload);

    case TOGGLE_RIGHT_SIDEBAR:
      return state
        .set('rightSidebarVisible', !state.rightSidebarVisible);

    case INCREMENT_COUNTER:
      return state
        .set('counter', state.counter + 1);

    case SAVE_USER_INFO:
      return state
          .set('loading', true);

    case SAVE_USER_INFO_INFLIGHT:
      return state
          .set('loading', true);

    case SAVE_USER_INFO_SUCCESSFUL:
      return state
          .set('loading', false)
          .set('userInfoAfterSubmit', action.payload);

    case SAVE_USER_INFO_ERROR:
      return state
          .set('loading', false)
          .set('error', SAVE_USER_INFO_ERROR);

    case FETCH_ALL_USER_INFO:
          return state
              .set('loading', true);

    case FETCH_ALL_USER_INFO_INFLIGHT:
          return state
              .set('loading', true);

    case FETCH_ALL_USER_INFO_SUCCESSFUL:
          return state
              .set('loading', false)
              .set('allUsersInfo', action.payload);

    case FETCH_ALL_USER_INFO_ERROR:
          return state
              .set('loading', false)
              .set('error', FETCH_ALL_USER_INFO_ERROR);
    default:
    return state;
}
};

export default appReducer;
