import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  valorCookie: string;

  constructor(private cookieService: CookieService) {
      this.cookieService.set('Login', 'Si inicio sesion', new Date('12/31/2022'))
      this.valorCookie = this.cookieService.get('Login')
   }



}
