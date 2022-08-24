import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Diet } from '../models/diet';
import { DietContent } from '../models/dietContent';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class DietService {

  dietUrl = environment.apiUrl + 'api/diet/';


  constructor(private httpClient: HttpClient) { }

  public lista(page: number): Observable<DietContent> {
    return this.httpClient.get<DietContent>(this.dietUrl + '?page=' + page);
  }

  public detalle(id: number): Observable<Diet> {  
    return this.httpClient.get<Diet>(this.dietUrl + id);
  }

  public findByUser(user: string): Observable<DietContent> {  
    return this.httpClient.get<DietContent>(this.dietUrl + '?user=' + user);
  }

  public nuevo(diet: Diet): Observable<any> {  
    return this.httpClient.post<any>(this.dietUrl, diet);
  }

  public actualizar(id: string, diet: Diet): Observable<any> {
    return this.httpClient.put<any>(this.dietUrl + id, diet);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.dietUrl + id);
  }

}
