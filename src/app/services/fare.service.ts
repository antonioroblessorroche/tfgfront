import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Fare } from '../models/fare';
import { FareContent } from '../models/fareContent';

@Injectable({
  providedIn: 'root'
})
export class FareService {

  trainingcenterUrl = environment.apiUrl + 'api/fare/';

  constructor(private httpClient: HttpClient) { }

  public lista(size: number): Observable<FareContent> {
    return this.httpClient.get<FareContent>(this.trainingcenterUrl + '?size=' + size);
  }

  public detalle(id: string): Observable<Fare> {  
    return this.httpClient.get<Fare>(this.trainingcenterUrl + id);
  }

  public nuevo(trainingcenter: Fare): Observable<any> {  
    return this.httpClient.post<any>(this.trainingcenterUrl, trainingcenter);
  }

  public actualizar(id: string, trainingcenter: Fare): Observable<any> {
    return this.httpClient.put<any>(this.trainingcenterUrl + id, trainingcenter);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.trainingcenterUrl + id);
  }
}
