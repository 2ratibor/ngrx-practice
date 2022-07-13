import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions/register.action';


const initialState: AuthStateInterface = {
    registrationRequestIsInProgress: false
};

const authReducer = createReducer(
    initialState,
    on(registerAction, (state): AuthStateInterface => {
        return {
            ...state,
            registrationRequestIsInProgress: true
        };
    })
);

export function rootReducer(state: AuthStateInterface, action: Action): AuthStateInterface {
    return authReducer(state, action);
}
