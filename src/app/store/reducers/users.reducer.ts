import * as UsersActions from '../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { createSelector } from "@ngrx/store";

import * as fromApp from './app.reducer';

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
};

export function usersReducer(
  state = initialState,
  action: UsersActions.UsersActions
) {
  let updatedUsers: User[] = [...state.users];

  switch (action.type) {
    case UsersActions.GET_USERS_FROM_SERVER:
      return {
        ...state,
        isLoading: true
      };
    case UsersActions.ADD_USERS_TO_STORE:
      return {
        ...state,
        users: [...action.payload],
        isLoading: false
      };
    case UsersActions.ADD_USER_TO_STORE:
      updatedUsers.push(action.payload);
      return {
        ...state,
        users: updatedUsers
      };
    case UsersActions.DELETE_USER_FROM_STORE:
      updatedUsers = updatedUsers.filter((user, index) => {
        return user._id !== action.payload;
      });
      return {
        ...state,
        users: updatedUsers
      };
    case UsersActions.UPDATE_USER_IN_STORE:

      const index = updatedUsers.findIndex(item => item._id === action.payload._id);
      updatedUsers[index] = action.payload;
      return {
        ...state,
        users: updatedUsers
      };
    case UsersActions.USERS_ERROR_CATCHED:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}

export const getUser = createSelector(
  (state: fromApp.AppState) => state.users.users,
  (users: User[], props) => users.filter(user => user._id === props.UserId)[0]
);
