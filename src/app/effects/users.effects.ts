import { Actions, ofType, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { switchMap, take, map, catchError } from 'rxjs/operators';

import * as UsersActions from '../store/actions/user.actions';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
    
    @Effect()
    getUsersFromServer = this.actions$.pipe(
        ofType(UsersActions.GET_USERS_FROM_SERVER),
        switchMap(() => {            
            return this.userService.getUsers().pipe(
                take(1),
                map((users: User[]) => {
                    console.log('users///' + users);
                    return {
                        type: UsersActions.ADD_USERS_TO_STORE,
                        payload: users
                    }
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
        private userService: UsersService
    ) {} 
}