import { Component, OnInit } from '@angular/core';
import { ResponseApi } from 'src/app/core/interfaces/response-api';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  news: any;
  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    await this.apiService
      .getHttp()
      .toPromise()
      .then((data: ResponseApi) => {
        console.log(data);

        this.news = data;
      })
      .catch((error) => console.error(error.error.message));
  }
}
