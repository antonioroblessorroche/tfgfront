import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { UserPayment } from '../models/userPayment';
import { UserPaymentContent } from '../models/userPaymentContent';

@Injectable({
  providedIn: 'root'
})
export class UserPaymentService {

  userPaymentUrl = environment.apiUrl + 'api/userPayment/';

  constructor(private httpClient: HttpClient) { }

  public lista(size: number): Observable<UserPaymentContent> {
    return this.httpClient.get<UserPaymentContent>(this.userPaymentUrl + '?size=' + size);
  }

  public listaByUser(page: number, userId: string): Observable<UserPaymentContent> {
    return this.httpClient.get<UserPaymentContent>(this.userPaymentUrl + 'user/' + userId + '?page=' + page);
  }

  public detalle(id: string): Observable<UserPayment> {  
    return this.httpClient.get<UserPayment>(this.userPaymentUrl + id);
  }

  public nuevo(userPayment: UserPayment): Observable<any> {  
    return this.httpClient.post<any>(this.userPaymentUrl, userPayment);
  }

  public actualizar(id: string, userPayment: UserPayment): Observable<any> {
    return this.httpClient.put<any>(this.userPaymentUrl + id, userPayment);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.userPaymentUrl + id);
  }
}
