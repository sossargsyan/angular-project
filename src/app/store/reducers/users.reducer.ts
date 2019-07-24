import * as UsersActions from '../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { store } from '@angular/core/src/render3';


export interface State {
    users: User[];
    currentUserId: string;
    errorMessage: string;
    isLoading: boolean
}

const initialState: State = {
    users: [],
    currentUserId: null,
    errorMessage: null,
    isLoading: false
}

export function usersReducer(
    state = initialState,
    action: UsersActions.UsersActions
) {
    const updatedUsers = [...state.users];
    switch( action.type ) {
        case UsersActions.ADD_USERS_TO_STORE:
            return {
                ...state,
                users: {...action.payload}
            }
        case UsersActions.ADD_USER_TO_STORE:
            updatedUsers.push(action.payload);
            return {
                ...state,
                users: updatedUsers
            }
        case UsersActions.DELETE_USER_FROM_STORE:
            updatedUsers.find((user, index) => {
                return user._id !== action.payload;
            });
            return {
                ...state,
                users: updatedUsers
            }
        case UsersActions.UPDATE_USER_IN_STORE:

            const index = updatedUsers.findIndex(item => item._id === action.payload._id);
            updatedUsers[index] = action.payload;
            return {
                ...state,
                users: updatedUsers
            }
        case UsersActions.USERS_ERROR_CATCHED:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}