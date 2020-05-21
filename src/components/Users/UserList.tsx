import * as React from 'react';
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from '../../redux/store/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const UserList = (): JSX.Element => {
    const users = useSelector((state) => state.userState.users);
    console.log(users)
    return (
        <div className="name-container">
            {users
                && users.map((user) => (
                    <span key={user.name} className="name">
                        {user.name}
                    </span>
                ))}
        </div>
    );
};
export default (UserList);
