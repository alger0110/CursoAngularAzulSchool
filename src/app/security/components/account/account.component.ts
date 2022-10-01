import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  nameUser: string = "No existe información";


  constructor(private cookieService: CookieService) { 
    if (this.cookieService.check('Login')) {
      this.cookieService.set('Name', "Emanuel Garcia")
      this.nameUser = this.cookieService.get("Name")
    }
  }

  ngOnInit(): void {
  }

}
