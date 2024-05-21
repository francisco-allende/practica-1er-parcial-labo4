import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    user: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  login() {

    if (this.loginForm.invalid) {
      return;
    }

    const userDataString = JSON.stringify(this.loginForm.value);

    localStorage.setItem("current-user", userDataString);

  }
}
