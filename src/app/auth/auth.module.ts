import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { RegisterComponent } from './components/register/register.component';
import { rootReducer } from './store/reducers';


const authRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        redirectTo: 'register'
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(authRoutes),
        StoreModule.forFeature('auth', rootReducer)
    ],
    declarations: [
        RegisterComponent
    ],
    exports: []
})
export class AuthModule { }
