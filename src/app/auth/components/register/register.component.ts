import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { registerAction } from '../../store/actions/register.action';


@Component({
    selector: 'np-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store
    ) { }

    ngOnInit(): void {
        this.initializeForm();
    }

    initializeForm(): void {
        this.form = this.formBuilder.group({
            userName: [
                '',
                [Validators.required]
            ],
            email: '',
            password: ''
        });
    }

    onSubmit(): void {
        this.store.dispatch(
            registerAction({
                username: this.form.get('userName').value,
                email: this.form.get('email').value,
                password: this.form.get('password').value
            })
        );
    }
}
