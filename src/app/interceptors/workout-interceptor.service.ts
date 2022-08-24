import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = req.clone({headers : req.headers.set('Authorization' , 'Bearer ' + token)});
    }
    return next.handle(authReq);
  }
}

export const interceptorProvider = [ {provide: HTTP_INTERCEPTORS, useClass: WorkoutInterceptorService, multi: true }];