import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(public _router: Router, public cookies:CookieService){}
    canActivate():boolean{
        if (!this.cookies.get('tokenKey')){
            this._router.navigate(['AdminLogins']);
            return false;
        }
        return true;
    }
        
    }
