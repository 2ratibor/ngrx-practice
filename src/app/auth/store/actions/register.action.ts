import { createAction, props } from '@ngrx/store';

import { ActionType } from '../actionTypes';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';


export const registerAction = createAction(
    ActionType.REGISTER,
    props<RegisterRequestInterface>()
);

