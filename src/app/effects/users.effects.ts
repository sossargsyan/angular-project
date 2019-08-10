import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, take, map, catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

import * as UsersActions from '../store/actions/user.actions';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
    
    @Effect()
    getUsersFromServer = this.actions$.pipe(
        ofType(UsersActions.GET_USERS_FROM_SERVER),
        switchMap(() => {            
            return this.userService.getUsers();
        }),
        map((users: User[]) => {
            return {
                type: UsersActions.ADD_USERS_TO_STORE,
                payload: users
            }
            // return new UsersActions.AddUsersToStore(users);
        }),
        catchError((errorCase) => {
            return of(new UsersActions.UsersErrorCatched(errorCase.error.errorMessage));
        })
    );

    @Effect()
    addUserFromServer = this.actions$.pipe(
        ofType(UsersActions.ADD_USER_TO_SERVER),
        switchMap((state: any) => { 
            return this.userService.addUser(state.payload).pipe(
                take(1),
                map((responce: any) => {
                    console.log(responce);
                    state.dialogRef.close(responce);
                    return {
                        type: UsersActions.ADD_USER_TO_STORE,
                        payload: responce.user
                    }
                    // return new UsersActions.DeleteUserFromStore(state.payload);
                }),
                catchError((errorCase) => {
                    return of(new UsersActions.UsersErrorCatched(errorCase.error.errorMessage));
                })
            );
        })
    );

    @Effect()
    deleteUserFromServer = this.actions$.pipe(
        ofType(UsersActions.DELETE_USER_FROM_SERVER),
        switchMap((state: any) => { 
            return this.userService.deleteUser(state.payload).pipe(
                take(1),
                map((responce) => {
                    state.dialogRef.close(responce);
                    return {
                        type: UsersActions.DELETE_USER_FROM_STORE,
                        payload: state.payload
                    }
                    // return new UsersActions.DeleteUserFromStore(state.payload);
                }),
                catchError((errorCase) => {
                    return of(new UsersActions.UsersErrorCatched(errorCase.error.errorMessage));
                })
            );
        })
    );

    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private userService: UsersService,
        private _snackBar: MatSnackBar,
    ) {} 
}