import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_HEADER_KEY ='Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token:CookieService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq=req;
    const token=this.token.get('tokenKey')
    if (token!=null){
        authReq=req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,'Bearer'+ token)});
    }
    return next.handle(req);
  }
}
