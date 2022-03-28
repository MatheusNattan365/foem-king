import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup = this.formBuilder.group({
        email: ['test@test.com'],
        password: ['12345678'],
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly authService: AuthService
    ) {}

    public login(): void {
        const { email, password } = this.loginForm.value;
        this.authService.signIn(email, password);
    }

    public ngOnInit(): void {}
}
