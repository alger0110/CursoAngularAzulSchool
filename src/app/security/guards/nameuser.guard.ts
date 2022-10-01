import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NameuserGuard implements CanActivate {
  constructor(private router:Router, private cookieService:CookieService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      if (this.cookieService.check('Name')) {
        return true;
      }

    
      this.router.navigate(['security/account'])
      return false;
  }
  
}
