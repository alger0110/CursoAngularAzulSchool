import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
    //console.log(environment.API_URL);
    //console.log(environment.API_TOKEN);
  }

  getHttp(): Observable<any> {
    return this.httpClient.get(`${environment.API_URL}?language=es`);
  }
}
