import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { User, UserState } from '../reducers/userReducer';

export enum UserActionTypes {
    GET_ALL = 'GET_ALL',
}

export interface UserGetAllActions {
    type: UserActionTypes.GET_ALL;
    users: User[];
}


export type UserActions = UserGetAllActions;


export const getAllUsers: ActionCreator<
    ThunkAction<Promise<any>, UserState, null, UserGetAllActions>
> = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            users: response.data,
            type: UserActionTypes.GET_ALL,
        });
    } catch (err) {
        console.error(err);
    }
};
