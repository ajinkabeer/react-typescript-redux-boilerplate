import { Reducer } from 'redux';
import {
  UserActions,
  UserActionTypes,
} from '../actions/UserActions';

export interface User {
  name: string;
  age: number;
}

export interface UserState {
  users: User[];
}

const initialUserState: UserState = {
  users: [],
};


export const userReducer: Reducer<UserState, UserActions> = (
  state = initialUserState,
  action,
) => {
  switch (action.type) {
    case UserActionTypes.GET_ALL: {
      return {
        ...state,
        users: action.users,
      };
    }
    default:
      return state;
  }
};
