import { Action } from '@ngrx/store';

import { User } from 'src/app/models/user.model';

export const GET_USERS_FROM_SERVER = '[Users] Get Users From Server';
export const ADD_USERS_TO_STORE = '[Users] Add Users To Store';
export const ADD_USER_TO_SERVER = '[Users] Add User To Server';
export const ADD_USER_TO_STORE = '[Users] Add User To Store';
export const DELETE_USER_FROM_SERVER = '[Users] Delete User From Server';
export const DELETE_USER_FROM_STORE = '[Users] Delete User From Store';
export const UPDATE_USER_IN_SERVER = '[Users] Update User In Server';
export const UPDATE_USER_IN_STORE = '[Users] Update User In Store';
export const USERS_ERROR_CATCHED = '[Users] Error Catched';

export class GetUsersFromServer implements Action {
    readonly type = GET_USERS_FROM_SERVER;
}

export class AddUsersToStore implements Action {
    readonly type = ADD_USERS_TO_STORE;

    constructor(public payload: User[]) {}
}

export class AddUserToServer implements Action {
    readonly type = ADD_USER_TO_SERVER;

    constructor(public payload: User, public dialogRef? :any) {}
}

export class AddUserToStore implements Action {
    readonly type = ADD_USER_TO_STORE;

    constructor(public payload: User) {}
}

export class DeleteUserFromServer implements Action {
    readonly type = DELETE_USER_FROM_SERVER;

    constructor(public payload: string, public dialogRef? :any) {}
}

export class DeleteUserFromStore implements Action {
    readonly type = DELETE_USER_FROM_STORE;

    constructor(public payload: string) {}
}

export class UpdateUserInServer implements Action {
    readonly type = UPDATE_USER_IN_SERVER;

    constructor(public payload: User) {}
}

export class UpdateUserInStore implements Action {
    readonly type = UPDATE_USER_IN_STORE;

    constructor(public payload: User) {}
}

export class UsersErrorCatched implements Action {
    readonly type = USERS_ERROR_CATCHED;

    constructor(public payload: string) {}
}

export type UsersActions = 
    | AddUserToServer
    | AddUserToStore
    | GetUsersFromServer
    | AddUsersToStore
    | DeleteUserFromServer
    | DeleteUserFromStore
    | UpdateUserInServer
    | UpdateUserInStore
    | UsersErrorCatched;