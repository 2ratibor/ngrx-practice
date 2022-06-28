import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './components/register/register.component';


const authRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(authRoutes)
    ],
    declarations: [
        RegisterComponent
    ],
    exports: []
})
export class AuthModule { }
