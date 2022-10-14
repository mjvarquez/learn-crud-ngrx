import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthStorageService } from './auth-storage.service';
import { Observable } from 'rxjs';


const token_header_key = 'Authorization'

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(token_header_key, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
  constructor(private token: AuthStorageService) { }
}

export const tokenInterceptorService = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
];
