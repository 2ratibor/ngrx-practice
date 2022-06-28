import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'np-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

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
        console.log('Submit!!!', this.form.valid);
    }
}
