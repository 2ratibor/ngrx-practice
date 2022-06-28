import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const AppRoutes: Routes = [];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
