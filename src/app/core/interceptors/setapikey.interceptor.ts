import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetapikeyInterceptor implements HttpInterceptor {
  constructor() {}
  //&apiKey=${environment.API_TOKEN}
  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    console.log(request.method);

    if (request.method) {
    }
    const httpReq = request.clone({
      url: request.url + '&apiKey=' + environment.API_TOKEN,
    });

    console.log(httpReq.url);

    return next.handle(httpReq);
  }
}
