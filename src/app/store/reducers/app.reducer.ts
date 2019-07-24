import { ActionReducerMap } from '@ngrx/store';

import * as fromUsers from './users.reducer';

export interface AppState {
    users: fromUsers.State
}

export const appReducer: ActionReducerMap<AppState> = {
    users: fromUsers.usersReducer
}