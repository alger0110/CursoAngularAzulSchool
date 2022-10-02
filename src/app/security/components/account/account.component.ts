import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  nameUser: string = 'No existe información';
  roles: any = [
    {
      name: 'Administrador',
      permanent: true,
    },
    {
      name: 'Digitador',
      permanent: false,
    },
    {
      name: 'Vendedor',
      permanent: true,
    },
    {
      name: 'Contabilidad',
      permanent: false,
    },
  ];

  newsCategory: any = [
    { name: 'Deportes', allday: true },
    { name: 'Finanzas', allday: false },
    { name: 'Entretenimiento', allday: false },
    { name: 'Politicas', allday: true },
  ];

  constructor(private cookieService: CookieService) {
    if (this.cookieService.check('Login')) {
      this.cookieService.set('Name', 'Emanuel Garcia');
      this.nameUser = this.cookieService.get('Name');
    }
  }

  ngOnInit(): void {}
}
