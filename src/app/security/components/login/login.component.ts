import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  error: string = "";

  constructor(private cookieService: CookieService, private fromBuilder: FormBuilder
    , private router:Router) {
      this.form = this.fromBuilder.group({
        user: ['', [Validators.required, Validators.email ]],
        password: ['', [Validators.required, Validators.minLength(5)]]
      })
   }

   get userField(){
    return this.form.get('user')
   }

   get passwordField(){
    return this.form.get('password')
   }

   login(){
    if (this.form.valid) {
      const { user, password } = this.form.value;

      if (user === "hola@hola.com" && password === "123456") {
        this.cookieService.set('Login', 'Si inicio sesion', new Date('12/31/2022'))
        this.router.navigate(['/security/account'])
      }else{
        alert("Credenciales Invalidas")
      }
      



      
    }else{
      alert("Debe completar el formulario")
    }
   }



}
