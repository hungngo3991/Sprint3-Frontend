// @ts-ignore
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// @ts-ignore
import {Injectable} from '@angular/core';
// @ts-ignore
import {Observable} from 'rxjs';
import {TokenStorageService} from "../service/token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization';


// @ts-ignore
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authRequest = req;
    const token = this.tokenStorageService.getToken();
    if (token != null) {
      authRequest = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    return next.handle(authRequest);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }
];
