import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;
  loginUser:any = {email:'', password:''};

  constructor(public fb: FormBuilder, private router: Router , private auth: AuthService) 
  {
    this.loginForm = this.fb.group({
        email: new FormControl("", [Validators.required, Validators.email]),
        password: new FormControl("", Validators.required)
      });
  }
  
  login() {

    if (this.loginForm.invalid) {
      return;
    }
    this.loginUser.email = this.loginForm.get('email')?.value;
    this.loginUser.password = this.loginForm.get('password')?.value
    const userDataString = JSON.stringify(this.loginUser);

    localStorage.setItem("current-user", userDataString);
    this.router.navigateByUrl('');
  }

  hardcode(rol:string){
    if(rol == "admin"){
      this.loginForm.get('email')?.setValue("admin@gmail.com");
    }else{
      this.loginForm.get('email')?.setValue("empleado@gmail.com");
    }
    this.loginForm.get('password')?.setValue("123456");

  }
}
